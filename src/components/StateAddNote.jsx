import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NEXT_ID, NOTES } from "../sample-db";
import CancelButton from "./Buttons/CancelButton";
import CloseButton from "./Buttons/CloseButton";
import SaveButton from "./Buttons/SaveButton";

const StateAddNote = () => {
  let navigate = useNavigate();
  const initialEnteredValue = {
    title: "",
    details: "",
  };

  const [enteredValues, setEnteredValues] = useState(initialEnteredValue);

  const backToHome = () => {
    navigate("/");
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  const saveNote = (event) => {
    event.preventDefault();
    const dateToday = new Intl.DateTimeFormat("en-us", {month: "long", day: "numeric", year: "numeric"}).format(new Date());

    NOTES.push({id: NEXT_ID.VALUE++, ...enteredValues, date: `${dateToday}` });
    setEnteredValues(initialEnteredValue);
    console.log(NOTES)

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
          onChange={() => handleInputChange("title", event.target.value)}
          value={enteredValues.title}
          required
        />
        <textarea
          name="details"
          id="details"
          rows="5"
          className="outline outline-slate-400 p-2 rounded-lg resize-none font-normal"
          placeholder="Enter details"
          onChange={() => handleInputChange("details", event.target.value)}
          value={enteredValues.details}
          required
        ></textarea>
        <div className="flex justify-end items-center gap-2.5">
          <CancelButton type="reset" handleClick={backToHome} />
          <SaveButton type="submit" />
        </div>
      </form>
    </section>
  );
};

export default StateAddNote;
