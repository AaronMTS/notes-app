import { lazy, Suspense, useEffect, useRef, useState } from "react";
import DynamicTag from "../DynamicTag.jsx";
import LoadingIcon from "../../assets/loading.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";

const SaveIcon = lazy(() => import("../../assets/save.svg"));
const CloseIcon = lazy(() => import("../../assets/close.svg"));

const Note = ({ handleShowDeleteModal, id, title, details, date }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const noteTitle = useRef();
  const noteDetails = useRef();

  const updateNote = (event) => {
    event.preventDefault();
    console.log("updated");
  };
  const onUpdateAction = isBeingEdited && { onSubmit: updateNote };

  useEffect(() => {
    if (isBeingEdited) {
      noteTitle.current.select();
      noteDetails.current.select();
    }
  }, [isBeingEdited]);

  return (
    <DynamicTag
      tag={isBeingEdited ? "form" : "div"}
      attributes={{
        className:
          "flex flex-col gap-3.5 text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg",
        ...onUpdateAction,
      }}
    >
      <div className="grow flex flex-col gap-1">
        {isBeingEdited ? (
          <div className="flex items-center">
            <input
              type="text"
              ref={noteTitle}
              className="grow text-lg font-medium max-w-[calc(100%-calc(var(--spacing)*8.5))]"
              defaultValue={title}
              maxLength={50}
              placeholder="Enter new title"
              required
            />
            <button type="reset" title="cancelUpdate" onClick={() => setIsBeingEdited(false)} className="pl-2.5 cursor-pointer">
              <Suspense fallback={<LoadingIcon />}>
                <CloseIcon className="size-6 text-red-700" />
              </Suspense>
            </button>
          </div>
        ) : (
          <h6 className="text-lg font-medium">{title}</h6>
        )}
        <div className="grow flex overflow-y-auto break-all max-h-[115px]">
          {isBeingEdited ? (
            <textarea
              ref={noteDetails}
              className="grow resize-none text-sm font-light"
              defaultValue={details}
              placeholder="Enter new note details"
              required
            ></textarea>
          ) : (
            <p className="text-sm font-light">{details}</p>
          )}
        </div>
      </div>
      <hr className="text-yellow-700" />
      <span className="flex justify-between items-center h-6">
        <p className="text-sm font-light">{date}</p>
        <span
          className={`flex items-center ${
            !isBeingEdited && "gap-1.5 md:gap-0.5"
          }`}
        >
          {!isBeingEdited ? (
            <>
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setIsBeingEdited(true)}
                className="cursor-pointer"
              >
                <EditIcon className="size-6 transition-transform duration-150 active:scale-90 md:size-4.5" />
              </button>
              <button
                type="button"
                tabIndex={-1}
                onClick={() => handleShowDeleteModal(id, title, details, date)}
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
  );
};

export default Note;
