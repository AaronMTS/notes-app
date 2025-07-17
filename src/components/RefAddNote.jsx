import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NEXT_ID, NOTES } from "../db";
import CancelButton from "./Buttons/CancelButton";
import CloseButton from "./Buttons/CloseButton";
import SaveButton from "./Buttons/SaveButton";

const RefAddNote = () => {
  let navigate = useNavigate();
  const noteTitle = useRef();
  const noteDetails = useRef();

  const backToHome = () => {
    navigate("/");
  };

  const saveNote = (event) => {
    event.preventDefault();
    const dateToday = new Intl.DateTimeFormat("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date());

    NOTES.push({
      id: NEXT_ID.VALUE++,
      title: noteTitle.current.value,
      details: noteDetails.current.value,
      date: dateToday,
    });

    console.log(NOTES);
    navigate("/");
  };

  return (
    <section className="min-w-64 w-[80vw] max-w-md space-y-3 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
      <header className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Add a note</h3>
        <CloseButton type="button" handleClick={backToHome} />
      </header>
      <form onSubmit={saveNote} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          id="title"
          className="outline outline-slate-400 p-2 rounded-lg font-normal"
          placeholder="Enter title"
          ref={noteTitle}
          required
        />
        <textarea
          name=""
          id=""
          rows="5"
          className="outline outline-slate-400 p-2 rounded-lg resize-none font-normal"
          placeholder="Enter details"
          ref={noteDetails}
        ></textarea>
        <div className="flex justify-end items-center gap-2.5">
          <CancelButton type="reset" handleClick={backToHome} />
          <SaveButton type="submit" />
        </div>
      </form>
    </section>
  );
};

export default RefAddNote;
