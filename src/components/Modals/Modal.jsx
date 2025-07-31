const Modal = ({ handleClick, children }) => {
  return (
    <div className="z-20 fixed top-0 left-0 flex items-center justify-center h-dvh w-dvw">
      <div
        onClick={handleClick}
        className="absolute size-full bg-linear-to-b from-gray-500/60 to-black/80 dark:from-gray-700/20 backdrop-blur-[2px]"
      ></div>
      <div className="absolute">{children}</div>
    </div>
  );
};

export default Modal;
