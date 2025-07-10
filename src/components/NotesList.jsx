import { useNavigate } from "react-router-dom";
import { NOTES } from "../db.js";
import Note from "./Notes/Note";
import AddNoteButton from "./Buttons/AddNoteButton.jsx";

const NotesList = () => {
  let navigate = useNavigate();

  const noNoteFallback = (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-max flex flex-col gap-4 items-center">
      <p className="dark:text-gray-100">There are no notes created yet...</p>
      <AddNoteButton handleClick={() => navigate("/add")} />
    </div>
  )

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 rounded-lg overflow-y-auto">
      {NOTES.length > 0 ? NOTES.map(note => {
        return <Note key={note.id} content={note.details} date={note.date} />
      }) : noNoteFallback}
    </div>
  );
};

export default NotesList;
