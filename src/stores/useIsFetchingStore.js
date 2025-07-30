import { create } from "zustand";

export const useIsFetchingStore = create(set => ({
    isFetching: true,
    setIsFetching: (newState) => set({isFetching: newState})
}))