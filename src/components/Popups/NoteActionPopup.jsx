import { lazy, Suspense } from "react";
import { usePopupTriggerStore } from "../../stores/usePopupTriggerStore";
import CloseButton from "../Buttons/CloseButton";
import LoadingIcon from "../../assets/loading.svg";

const InfoIcon = lazy(() => import("../../assets/info.svg"));
const CheckCircleIcon = lazy(() => import("../../assets/check_circle.svg"));
const DeleteForeverIcon = lazy(() => import("../../assets/delete_forever.svg"));

const currentActionStyling = {
  save: {
    bg: "bg-lime-300",
    icon: <CheckCircleIcon className="size-6 fill-lime-700" />,
    textColor: "text-lime-800",
    insertedText: "created",
    borderLeftColor: "border-l-lime-500",
    closeIconColor: "fill-lime-800"
  },
  edit: {
    bg: "bg-blue-200",
    icon: <InfoIcon className="size-6 fill-blue-900" />,
    textColor: "text-blue-900",
    insertedText: "updated",
    borderLeftColor: "border-l-blue-300",
    closeIconColor: "fill-blue-900"
  },
  delete: {
    bg: "bg-red-200",
    icon: <DeleteForeverIcon className="size-6 fill-red-800" />,
    textColor: "text-red-800",
    insertedText: "deleted",
    borderLeftColor: "border-l-red-400",
    closeIconColor: "fill-red-800"
  }
}

const NoteActionPopup = ({ action }) => {
  const setPopupTrigger = usePopupTriggerStore(
    (state) => state.setPopupTrigger
  );

  const formattedAction = action.toLowerCase();

  return (
    <div
      className={`z-10 fixed top-5 right-1/2 translate-x-1/2 ${currentActionStyling[formattedAction].bg} flex rounded-lg shadow-lg`}
    >
      <div className="p-2.5 flex gap-2.5 items-center">
        <Suspense fallback={<LoadingIcon className="size-6 animate-spin text-stone-900" />}>
          {currentActionStyling[formattedAction].icon}
        </Suspense>
        <h5 className={`${currentActionStyling[formattedAction].textColor} text-nowrap`}>{`Note ${ currentActionStyling[formattedAction].insertedText } successfully`}</h5>
      </div>
      <div className={`p-2.5 border-l ${ currentActionStyling[formattedAction].borderLeftColor } flex items-center`}>
        <CloseButton
          closeIconFill={`${ currentActionStyling[formattedAction].closeIconColor }`}
          handleClick={() => setPopupTrigger("")}
        />
      </div>
    </div>
  );
};

export default NoteActionPopup;
