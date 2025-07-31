import { create } from "zustand";

export const useIsCreatedPopupShown = create(set => ({
    isCreatedPopupShown: false,
    setIsCreatedPopupShown: (newState) => set({isCreatedPopupShown: newState})
}))