const SaveButton = ({handleClick, ...props }) => {
  return (
    <button
      onClick={handleClick}
      {...props}
      className="bg-yellow-300 px-3.5 py-1.5 rounded-md cursor-pointer hover:bg-yellow-400 active:bg-amber-400 transition-colors"
    >
      Save
    </button>
  );
};

export default SaveButton;
