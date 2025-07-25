import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
// import AddNote from "../components/AddNote";
// import StateAddNote from "../components/StateAddNote";
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
