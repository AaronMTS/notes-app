import CloseIcon from "../../assets/close.svg";

const CloseButton = ({ handleClick, closeIconFill, ...props }) => {
  return (
    <button
      {...props}
      onClick={handleClick}
      className="size-6 cursor-pointer"
    >
      <CloseIcon className={closeIconFill} />
    </button>
  );
};

export default CloseButton;
