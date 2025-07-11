import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
// import AddNote from "../components/AddNote";
import StateAddNote from "../components/StateAddNote";

const AddNoteModal = () => {
  let navigate = useNavigate();

  return (
    <Modal handleClick={() => navigate("/")}>
      <StateAddNote />
    </Modal>
  );
};

export default AddNoteModal;
