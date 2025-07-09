const Modal = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center h-dvh w-dvw bg-linear-to-b from-gray-500/60 to-black/80 dark:from-gray-700/20 backdrop-blur-[2px]">
        {children}
    </div>
  )
}

export default Modal;