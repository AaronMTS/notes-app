import AddNoteIcon from "../../assets/note_add.svg";

const AddNoteButton = ({ handleClick, children, ...props }) => {
  return (
    <button {...props} onClick={handleClick}>
      <AddNoteIcon className="size-5.5" />
      {children}
    </button>
  );
};

export default AddNoteButton;
