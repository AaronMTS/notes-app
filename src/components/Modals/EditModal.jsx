import Modal from "./Modal";
import CloseButton from "../Buttons/CloseButton";

const EditModal = ({ header, desc, buttons, handleHideEditModal }) => {
  return (
    <Modal>
      <div className="min-w-64 w-[80vw] max-w-md space-y-2.5 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
        <span className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">{header}</h4>
          <CloseButton
            type="button"
            closeIconFill="fill-black"
            handleClick={handleHideEditModal}
          />
        </span>
        <h5 className="text-stone-800">{desc}</h5>
        <hr className="w-full text-black/15" />
        <span className="flex gap-3.5 justify-end">{buttons}</span>
      </div>
    </Modal>
  );
};

export default EditModal;
