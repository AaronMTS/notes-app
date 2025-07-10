import AddNoteIcon from "../../assets/note_add.svg";

const AddNoteButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex gap-1.5 items-center bg-yellow-300 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-yellow-400 active:bg-amber-400 transition-colors"
    >
      <AddNoteIcon className="size-5.5" />
      <span>Add a note</span>
    </button>
  );
};

export default AddNoteButton;
