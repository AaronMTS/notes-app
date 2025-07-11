const Note = ({ title, details, date }) => {
  return (
    <div className="flex flex-col gap-3.5 text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg">
      <div className="grow flex flex-col gap-1">
        <h6 className="text-lg font-semibold">{title}</h6>
        <div className="grow overflow-y-auto">
          <p className="text-sm font-light">{details}</p>
        </div>
      </div>
      <hr className="text-yellow-700" />
      <span className="flex justify-between h-6">
        <p className="text-sm font-light">{date}</p>
        <button
          type="button"
          className="size-6 bg-[url(src/assets/delete.svg)] bg-contain bg-transparent border-none cursor-pointer transition-transform duration-150 active:scale-90"
        ></button>
      </span>
    </div>
  );
};

export default Note;
