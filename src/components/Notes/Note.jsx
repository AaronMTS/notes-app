const Note = () => {
  return (
    <div className="flex flex-col text-stone-950 bg-soft-yellow h-56 p-3 rounded-lg">
      <div className="grow overflow-y-auto">
        <p>Test note</p>
      </div>
      <span className="flex justify-between h-6">
        <p>01/01/2000</p>
        <button type="button" className="size-6 bg-[url(src/assets/delete.svg)] bg-contain bg-transparent border-none cursor-pointer transition-transform duration-150 active:scale-90"></button>
      </span>
    </div>
  );
};

export default Note;
