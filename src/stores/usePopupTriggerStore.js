import { create } from "zustand";

export const usePopupTriggerStore = create(set => ({
    popupTrigger: "",
    setPopupTrigger: (newState) => set({popupTrigger: newState})
}))