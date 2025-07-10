import CloseIcon from "../../assets/close.svg";

const CloseButton = ({ handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="size-6 cursor-pointer"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
