import AddNoteButton from "./Buttons/AddNoteButton";

const NoNoteFallback = ({ children }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-max flex flex-col gap-4 items-center">
      <p className="dark:text-gray-100">There are no notes created yet...</p>
      {children}
    </div>
  );
};

export default NoNoteFallback;
