const CancelButton = ({handleCancel}) => {
  return (
    <button type="button" onClick={handleCancel} className="outline outline-red-300 px-3 py-1.5 rounded-md cursor-pointer hover:bg-red-100 active:bg-red-200 transition-colors">Cancel</button>
  )
}

export default CancelButton