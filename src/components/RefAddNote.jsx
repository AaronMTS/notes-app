import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useIsFetchingStore } from "../stores/useIsFetchingStore";
import { useIsCreatedPopupShown } from "../stores/useIsCreatedPopupShown";
import CancelButton from "./Buttons/CancelButton";
import CloseButton from "./Buttons/CloseButton";
import SaveButton from "./Buttons/SaveButton";

const RefAddNote = () => {
  const navigate = useNavigate();
  const noteTitle = useRef();
  const noteDetails = useRef();
  const setIsFetching = useIsFetchingStore(state => state.setIsFetching)
  const setIsCreatedPopupShown = useIsCreatedPopupShown(state => state.setIsCreatedPopupShown)

  const backToHome = () => {
    navigate("/");
  };

  const saveNote = async (event) => {
    event.preventDefault();
    const dateToday = new Date().toISOString().split("T")[0];
    const reqBody = JSON.stringify({
      title: noteTitle.current.value,
      details: noteDetails.current.value,
      date: dateToday,
    });
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/Notes`, {
        method: "POST",
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: reqBody,
      });

      if (!response.ok) {
        console.log(response.statusText);
        return;
      }

      backToHome()
      setIsCreatedPopupShown(true)
      setIsFetching(true)

    } catch (error) {
      console.error(`Error adding note: ${error}`);
    }
  };

  return (
    <section className="min-w-64 w-[80vw] max-w-md space-y-3 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
      <header className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Add a note</h3>
        <CloseButton type="button" closeIconFill="fill-black" handleClick={backToHome} />
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
