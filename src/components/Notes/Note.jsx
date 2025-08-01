import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import { convertDateFormat } from "../../utils/dateStringUtil";

const Note = ({ handleShowDeleteModal, id, title, details, date }) => {
  return (
    <div className="flex flex-col gap-3.5 text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg">
      <div className="grow flex flex-col gap-1">
        <h6 className="text-lg font-medium">{title}</h6>
        <div className="grow overflow-y-auto break-all max-h-[115px]">
          <p className="text-sm font-light">{details}</p>
        </div>
      </div>
      <hr className="text-yellow-700" />
      <span className="flex justify-between items-center h-6">
        <p className="text-sm font-light">{date}</p>
        <span className="flex gap-1.5 items-center md:gap-0.5">
          <button type="button" tabIndex={-1} className="cursor-pointer">
            <EditIcon className="size-6 transition-transform duration-150 active:scale-90 md:size-4.5" />
          </button>
          <button
            type="button"
            tabIndex={-1}
            onClick={() => handleShowDeleteModal(id, title, details, date)}
            className="cursor-pointer"
          >
            <DeleteIcon className="size-6 transition-transform duration-150 active:scale-90 md:size-4.5" />
          </button>
        </span>
      </span>
    </div>
  );
};

export default Note;
