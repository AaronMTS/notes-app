import { Link } from "react-router-dom"

const CancelLinkButton = ({destination}) => {
  return (
    <Link to={destination} className="outline outline-red-300 px-3 py-1.5 rounded-md cursor-pointer hover:bg-red-100 active:bg-red-200 transition-colors">Cancel</Link>
  )
}

export default CancelLinkButton