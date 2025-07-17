import { useNavigate } from "react-router-dom";
import { NOTES } from "../db.js";
import Note from "./Notes/Note";
import AddNoteButton from "./Buttons/AddNoteButton.jsx";

const NotesList = () => {
  let navigate = useNavigate();

  const noNoteFallback = (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-max flex flex-col gap-4 items-center">
      <p className="dark:text-gray-100">There are no notes created yet...</p>
      <AddNoteButton
        className="flex gap-1.5 items-center bg-yellow-300 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-yellow-400 active:bg-amber-400 transition-colors"
        handleClick={() => navigate("/add")}
      >
        <span>Add a note</span>
      </AddNoteButton>
    </div>
  );

  return (
    <>
      <div className="scrollbar-thin scrollbar-gray-transparent grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 rounded-lg overflow-y-auto">
        {NOTES.length > 0
          ? NOTES.map((note) => {
              return <Note key={note.id} {...note} />;
            })
          : noNoteFallback}
      </div>
      {NOTES.length > 0 && (
        <AddNoteButton
          className="absolute bottom-8 right-1/2 translate-x-1/2 gap-1 p-3.5 bg-blue-600 **:fill-white rounded-full custom-shadow cursor-pointer hover:bg-blue-700 active:bg-blue-800 transition-colors md:right-5 md:translate-x-0 md:p-3 dark:bg-primary dark:hover:bg-blue-500 dark:active:bg-blue-600"
          handleClick={() => navigate("/add")}
        >
        </AddNoteButton>
      )}
    </>
  );
};

export default NotesList;
