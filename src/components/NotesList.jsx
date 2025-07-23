import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Note from "./Notes/Note";
import NoNoteFallback from "./NoNoteFallback.jsx";
import NotesLoadingFallback from "./NotesLoadingFallback.jsx";
import AddNoteButton from "./Buttons/AddNoteButton.jsx";
import DeleteModal from "../components/DeleteModal";

const generateLoadingFallback = () =>
  Array(Math.min(4, Math.max(2, Math.floor((window.innerWidth - 80) / 250))))
    .fill()
    .map((_, index) => <NotesLoadingFallback key={index} />);

const NotesList = () => {
  let navigate = useNavigate();
  const [notes, setNotes] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const initialDeleteModalState = {
    isShown: false,
    targetId: null,
    currentTitle: "",
    currentDetails: "",
    currentDate: "",
  };

  const [currentDeleteModalState, setCurrentDeleteModalState] = useState(
    initialDeleteModalState
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/Notes`)
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  }, []);

  const showDeleteModal = (noteId, noteTitle, noteDetails, noteDate) => {
    setCurrentDeleteModalState({
      isShown: true,
      targetId: noteId,
      currentTitle: noteTitle,
      currentDetails: noteDetails,
      currentDate: noteDate,
    });
  };

  const hideDeleteModal = () => {
    setCurrentDeleteModalState(initialDeleteModalState);
  };

  const deleteNote = () => {
    // NOTES.splice(NOTES.findIndex(note => note.id === currentDeleteModalState.targetId), 1);
    hideDeleteModal();
  };

  return (
    <>
      <div
        className={`scrollbar-thin scrollbar-gray-transparent grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 rounded-lg ${
          isLoading ? "animate-pulse overflow-hidden" : "overflow-y-auto"
        }`}
      >
        {notes ? (
          <>
            {notes.map((note) => {
              return (
                <Note
                  key={note.id}
                  handleShowDeleteModal={showDeleteModal}
                  {...note}
                />
              );
            })}

            <AddNoteButton
              tabIndex={-1}
              className="absolute bottom-8 right-1/2 translate-x-1/2 gap-1 p-3.5 bg-blue-600 **:fill-white rounded-full custom-shadow cursor-pointer hover:bg-blue-700 active:bg-blue-800 transition-colors md:right-5 md:translate-x-0 md:p-3 dark:bg-primary dark:hover:bg-blue-500 dark:active:bg-blue-600"
              handleClick={() => navigate("/add")}
            ></AddNoteButton>
          </>
        ) : isLoading ? (
          generateLoadingFallback()
        ) : (
          <NoNoteFallback>
            <AddNoteButton
              className="flex gap-1.5 items-center bg-yellow-300 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-yellow-400 active:bg-amber-400 transition-colors"
              handleClick={() => navigate("/add")}
            >
              <span>Add a note</span>
            </AddNoteButton>
          </NoNoteFallback>
        )}
      </div>
      {currentDeleteModalState.isShown && (
        <DeleteModal
          title={currentDeleteModalState.currentTitle}
          details={currentDeleteModalState.currentDetails}
          date={currentDeleteModalState.currentDate}
          confirmDelete={deleteNote}
          handleHideDeleteModal={hideDeleteModal}
        />
      )}
    </>
  );
};

export default NotesList;
