const ConfirmDeleteButton = ({ handleClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={handleClick}
      className="outline outline-red-600 bg-red-600 text-red-200 px-3 py-1.5 rounded-md cursor-pointer transition-colors hover:bg-red-700 active:bg-red-800"
    >
      Delete
    </button>
  );
};

export default ConfirmDeleteButton;
