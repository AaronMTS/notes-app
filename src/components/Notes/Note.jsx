const Note = ({ content, date }) => {
  return (
    <div className="flex flex-col gap-3.5 text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg">
      <div className="grow overflow-y-auto">
        <p>{content}</p>
      </div>
      <hr className="text-yellow-700" />
      <span className="flex justify-between h-6">
        <p>{date}</p>
        <button
          type="button"
          className="size-6 bg-[url(src/assets/delete.svg)] bg-contain bg-transparent border-none cursor-pointer transition-transform duration-150 active:scale-90"
        ></button>
      </span>
    </div>
  );
};

export default Note;
