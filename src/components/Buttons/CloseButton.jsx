import CloseIcon from "../../assets/close.svg";

const CloseButton = ({ handleClose }) => {
  return (
    <button type="button" onClick={handleClose} className="cursor-pointer">
        <CloseIcon />
    </button>
  )
}

export default CloseButton