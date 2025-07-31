import { useIsCreatedPopupShown } from "../../stores/useIsCreatedPopupShown";
import CheckCircleIcon from "../../assets/check_circle.svg";
import CloseButton from "../Buttons/CloseButton";

const SaveNotePopup = () => {
  const setIsCreatedPopupShown = useIsCreatedPopupShown(
    (state) => state.setIsCreatedPopupShown
  );

  return (
    <div className="z-10 fixed top-5 right-1/2 translate-x-1/2 bg-lime-300 flex rounded-lg shadow-lg">
      <div className="p-2.5 flex gap-2.5 items-center">
        <CheckCircleIcon className="size-6 fill-lime-700" />
        <h5 className="text-lime-800 text-nowrap">Note created successfully</h5>
      </div>
      <div className="p-2.5 border-l border-l-lime-500 flex items-center">
        <CloseButton
          closeIconFill="fill-lime-800"
          handleClick={() => setIsCreatedPopupShown(false)}
        />
      </div>
    </div>
  );
};

export default SaveNotePopup;
