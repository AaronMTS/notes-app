import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import AddNote from "../components/AddNote";

const AddNoteModal = () => {
  let navigate = useNavigate();

  return (
    <Modal handleClick={() => navigate("/")}>
      <AddNote />
    </Modal>
  );
};

export default AddNoteModal;
