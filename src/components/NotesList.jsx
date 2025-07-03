import Note from "./Notes/Note";

const NotesList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 rounded-lg overflow-y-auto">
      {/* To be fixed: Note component becomes too stretched when there are only one or two of them inside NotesList.
        * Potential fix: Count the number of NotesList's children, then apply styling depending on its amount.
      */}
      <Note />
      <Note />
    </div>
  );
};

export default NotesList;
