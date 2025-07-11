import { useNavigate } from "react-router-dom";
import CancelButton from "./Buttons/CancelButton";
import CloseButton from "./Buttons/CloseButton";
import SaveButton from "./Buttons/SaveButton";

const AddNote = () => {
  let navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const saveNote = () => {
    navigate("/");
  };

  return (
    <section className="min-w-64 w-[80vw] max-w-md space-y-3 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
      <header className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Add a note</h3>
        <CloseButton type="button" handleClick={backToHome} />
      </header>
      <form action="" className="flex flex-col gap-3">
        <textarea
          name=""
          id=""
          rows="5"
          className="outline outline-slate-400 p-2 rounded-lg resize-none font-normal"
          placeholder="Enter details"
        ></textarea>
        <div className="flex justify-end items-center gap-2.5">
          <CancelButton type="reset" handleClick={backToHome} />
          <SaveButton type="submit" handleSave={saveNote} />
        </div>
      </form>
    </section>
  );
};

export default AddNote;
