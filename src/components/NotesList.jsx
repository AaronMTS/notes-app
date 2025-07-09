import { NOTES } from "../db.js";
import AddNoteIcon from "../assets/note_add.svg";
import Note from "./Notes/Note";

const addNote = (
  <div className="absolute top-1/2 left-1/2 -translate-1/2 w-fit flex flex-col gap-4 items-center">
    <p className="dark:text-gray-100">There are no notes created yet...</p>
    <button type="button" className="flex gap-1.5 items-center bg-yellow-300 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-yellow-400 active:bg-amber-400 transition-colors">
      <AddNoteIcon className="size-5.5" />
      <span>Add a note</span>
    </button>
  </div>
);

const NotesList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 rounded-lg overflow-y-auto">
      {NOTES.length > 0 ? NOTES.map(note => {
        return <Note key={note.id} content={note.details} date={note.date} />
      }) : addNote}
    </div>
  );
};

export default NotesList;
