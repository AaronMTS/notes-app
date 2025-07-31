import { useNavigate } from "react-router-dom";
import Modal from "../components/Modals/Modal";
import RefAddNote from "../components/RefAddNote";

const AddNoteModal = () => {
  let navigate = useNavigate();

  return (
    <Modal handleClick={() => navigate("/")}>
      <RefAddNote />
    </Modal>
  );
};

export default AddNoteModal;
