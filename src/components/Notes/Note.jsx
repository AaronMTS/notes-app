import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { convertDateFormat, dateToday } from "../../utils/dateStringUtil.js";
import DynamicTag from "../DynamicTag.jsx";
import { usePopupTriggerStore } from "../../stores/usePopupTriggerStore.js";
import LoadingIcon from "../../assets/loading.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";

const SaveIcon = lazy(() => import("../../assets/save.svg"));
const CloseIcon = lazy(() => import("../../assets/close.svg"));
const CancelButton = lazy(() => import("../Buttons/CancelButton.jsx"));
const SaveButton = lazy(() => import("../Buttons/SaveButton.jsx"));
const EditModal = lazy(() => import("../Modals/EditModal.jsx"));

const initialEditModalState = {
  isEditModalShown: false,
  component: undefined,
};

const initializeEditedState = () => ({
  isBeingEdited: false,
  ...initialEditModalState,
});

const Note = ({ handleShowDeleteModal, id, title, details, date }) => {
  const setPopupTrigger = usePopupTriggerStore(
    (state) => state.setPopupTrigger
  );

  const [editedState, setEditedState] = useState(initializeEditedState);
  const noteTitle = useRef();
  const noteDetails = useRef();

  const initializeContentState = () => ({
    currentTitle: title,
    currentDetails: details,
    currentDate: convertDateFormat(date),
  });
  const [content, setContent] = useState(initializeContentState);

  const isNoteContentChanged = () =>
    content.currentTitle !== noteTitle.current.value ||
    content.currentDetails !== noteDetails.current.value;

  const closeEditModal = () => {
    setEditedState((prevValues) => ({
      ...prevValues,
      ...initialEditModalState,
    }));
  };

  const abortEdit = () => {
    setEditedState(initializeEditedState);
    setContent(initializeContentState);
  };

  const handleCancelEdit = () => {
    if (!isNoteContentChanged) {
      setEditedState((prevValues) => ({
        ...prevValues,
        isBeingEdited: false,
      }));
      return;
    }

    setContent((prevValues) => ({
      ...prevValues,
      currentTitle: noteTitle.current.value,
      currentDetails: noteDetails.current.value,
    }));

    setEditedState((prevValues) => ({
      ...prevValues,
      isEditModalShown: true,
      component: (
        <EditModal
          header={"Do you want to save your note?"}
          desc={`There are unsaved changes in "${content.currentTitle}".`}
          buttons={
            <>
              <CancelButton handleClick={closeEditModal} />
              <CancelButton content="Don't save" handleClick={abortEdit} />
              <SaveButton handleClick={updateNote} />
            </>
          }
          handleHideEditModal={closeEditModal}
        />
      ),
    }));
  };

  const updateNote = async (event) => {
    event.preventDefault();
    try {
      const newContent = {
        title: noteTitle.current.value,
        details: noteDetails.current.value,
        date: dateToday,
      };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/Notes/${id}`,
        {
          method: "PUT",
          headers: {
            "X-API-KEY": import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            ...newContent,
          }),
        }
      );

      if (!response.ok) {
        response.text().then((text) => alert(text));
        return;
      }

      setContent({
        currentTitle: newContent.title,
        currentDetails: newContent.details,
        currentDate: convertDateFormat(newContent.date),
      });
      setEditedState(initializeEditedState);
      setPopupTrigger("edit");
      setTimeout(() => {
        setPopupTrigger("");
      }, 3500);
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
    console.log("updated");
  };
  const onUpdateAction = editedState.isBeingEdited && { onSubmit: updateNote };

  useEffect(() => {
    if (editedState.isBeingEdited) {
      noteTitle.current.select();
      noteDetails.current.select();
    }
  }, [editedState.isBeingEdited]);

  return (
    <>
      <DynamicTag
        tag={editedState.isBeingEdited ? "form" : "div"}
        attributes={{
          className:
            "flex flex-col gap-3.5 text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg",
          ...onUpdateAction,
        }}
      >
        <div className="grow flex flex-col gap-1">
          {editedState.isBeingEdited ? (
            <div className="relative flex items-center">
              <div className="absolute h-full w-6 right-6 bg-linear-to-l from-soft-yellow to-transparent"></div>
              <input
                type="text"
                ref={noteTitle}
                className="grow text-lg font-medium max-w-[calc(100%-calc(var(--spacing)*6))]"
                defaultValue={content.currentTitle}
                maxLength={50}
                placeholder="Enter new title"
                required
              />
              <button
                type="reset"
                title="cancelUpdate"
                onClick={handleCancelEdit}
                className="cursor-pointer"
              >
                <Suspense fallback={<LoadingIcon />}>
                  <CloseIcon className="size-6 text-red-700" />
                </Suspense>
              </button>
            </div>
          ) : (
            <h6 className="text-lg font-medium">{content.currentTitle}</h6>
          )}
          <div className="grow flex overflow-y-auto break-all max-h-[115px]">
            {editedState.isBeingEdited ? (
              <textarea
                ref={noteDetails}
                className="grow resize-none text-sm font-light"
                defaultValue={content.currentDetails}
                placeholder="Enter new note details"
                required
              ></textarea>
            ) : (
              <p className="text-sm font-light">{content.currentDetails}</p>
            )}
          </div>
        </div>
        <hr className="text-yellow-700" />
        <span className="flex justify-between items-center h-6">
          <p className="text-sm font-light">{content.currentDate}</p>
          <span
            className={`flex items-center ${
              !editedState.isBeingEdited && "gap-1.5 md:gap-0.5"
            }`}
          >
            {!editedState.isBeingEdited ? (
              <>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() =>
                    setEditedState((prevValues) => ({
                      ...prevValues,
                      isBeingEdited: true,
                    }))
                  }
                  className="cursor-pointer"
                >
                  <EditIcon className="size-6 transition-transform duration-150 active:scale-90 md:size-4.5" />
                </button>
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() =>
                    handleShowDeleteModal(id, title, details, date)
                  }
                  className="cursor-pointer"
                >
                  <DeleteIcon className="size-6 transition-transform duration-150 active:scale-90 md:size-4.5" />
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="flex px-2 py-1 gap-0.5 items-center text-green-800 cursor-pointer"
              >
                <Suspense fallback={<LoadingIcon />}>
                  <SaveIcon className="size-5 md:size-4.5" />
                </Suspense>
                <span className="text-sm">Save</span>
              </button>
            )}
          </span>
        </span>
      </DynamicTag>
      {editedState.isEditModalShown && (
        <Suspense fallback=<LoadingIcon />>{editedState.component}</Suspense>
      )}
    </>
  );
};

export default Note;
