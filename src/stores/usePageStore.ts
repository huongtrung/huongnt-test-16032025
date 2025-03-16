import { create } from "zustand"

interface PagesState {
  pagesData: any
  setPagesData: (payload: any) => void
}

export const usePagesStore = create<PagesState>((set) => ({
  pagesData: null,
  setPagesData: (payload: any) => set({ pagesData: payload }),
}))
