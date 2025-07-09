import CancelButton from "../components/Buttons/CancelButton"
import CloseButton from "../components/Buttons/CloseButton"
import SaveButton from "../components/Buttons/SaveButton"

const AddNote = () => {
  return (
    <section className="min-w-64 w-[80vw] max-w-md flex flex-col gap-3 bg-slate-100 p-3.5 rounded-lg lg:w-[40vw]">
        <header className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Add a note</h3>
            <CloseButton className="size-6" />
        </header>
        <textarea name="" id="" rows="5" className="outline outline-slate-400 p-2 rounded-lg resize-none font-normal" placeholder="Enter details"></textarea>
        <div className="flex justify-end items-center gap-2.5">
            <CancelButton />
            <SaveButton />
        </div>
    </section>
  )
}

export default AddNote