import CloseIcon from "../../assets/close.svg";

const CloseButton = ({ handleClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={handleClick}
      className="size-6 cursor-pointer"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
