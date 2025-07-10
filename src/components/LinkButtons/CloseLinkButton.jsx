import { Link } from "react-router-dom";
import CloseIcon from "../../assets/close.svg";

const CloseLinkButton = ({ destination }) => {
  return (
    <Link to={destination} className="size-6 cursor-pointer">
        <CloseIcon />
    </Link>
  )
}

export default CloseLinkButton