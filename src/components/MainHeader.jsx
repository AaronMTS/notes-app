import { Link } from "react-router-dom";
import NoteActionPopup from "./Popups/NoteActionPopup";
import { usePopupTriggerStore } from "../stores/usePopupTriggerStore";

const MainHeader = ({ children }) => {
  const popupTrigger = usePopupTriggerStore(
    (state) => state.popupTrigger
  );

  return (
    <header className="flex justify-between items-center *:transition-colors">
      {popupTrigger && <NoteActionPopup action={popupTrigger} />}
      <Link
        to="/"
        className="text-2xl font-semibold leading-[normal] dark:text-gray-100"
      >
        Notes
      </Link>
      {children}
    </header>
  );
};

export default MainHeader;
