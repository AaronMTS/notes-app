import Modal from "./Modal";
import CloseButton from "./Buttons/CloseButton"
import CancelButton from "./Buttons/CancelButton";
import ConfirmDeleteButton from "./Buttons/ConfirmDeleteButton";
import TitleIcon from "../assets/title.svg"
import DetailsIcon from "../assets/note_details.svg";
import CalendarIcon from "../assets/calendar.svg";

const DeleteModal = ({ title, details, date, confirmDelete, handleHideDeleteModal }) => {
  return (
    <Modal handleClick={handleHideDeleteModal}>
      <div className="min-w-64 w-[80vw] max-w-md space-y-2.5 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
        <span className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">Are you sure?</h4>
          <CloseButton type="button" handleClick={handleHideDeleteModal} />
        </span>
        <h5 className="text-stone-800">You are about to delete this note:</h5>
        <div className="space-y-1.5 text-sm *:flex *:gap-1.5">
            <div className="items-center">
                <span>
                    <TitleIcon className="size-5 *:fill-stone-600" />
                </span>
                <p className="truncate font-medium text-stone-700">{title}</p>
            </div>
          <div>
            <span>
              <DetailsIcon className="size-5 mt-0.5 *:fill-stone-600" />
            </span>
            <p className="line-clamp-3 text-stone-600">{details}</p>
          </div>
          <div className="items-center">
            <span>
              <CalendarIcon className="size-5 *:fill-stone-600" />
            </span>
            <p className="text-stone-600">{date}</p>
          </div>
        </div>
        <span className="flex gap-3.5 justify-end">
          <CancelButton type="button" handleClick={handleHideDeleteModal} />
          <ConfirmDeleteButton type="button" handleClick={confirmDelete} />
        </span>
      </div>
    </Modal>
  );
};

export default DeleteModal;
