import { Link } from "react-router-dom";
import SaveNotePopup from "./Popups/SaveNotePopup";
import { useIsCreatedPopupShown } from "../stores/useIsCreatedPopupShown";

const MainHeader = ({ children }) => {
  const isCreatedPopupShown = useIsCreatedPopupShown(
    (state) => state.isCreatedPopupShown
  );
  const setIsCreatedPopupShown = useIsCreatedPopupShown(
    (state) => state.setIsCreatedPopupShown
  );

  setTimeout(() => isCreatedPopupShown && setIsCreatedPopupShown(false), 3500);

  return (
    <header className="flex justify-between items-center *:transition-colors">
      {isCreatedPopupShown && <SaveNotePopup />}
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
