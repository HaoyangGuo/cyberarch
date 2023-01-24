import { create } from "zustand";

interface ArchState {
  sketchfabAccessToken: string | null;
  setSketchfabAccessToken: (token: string) => void;
}

export const useArchStore = create<ArchState>()((set) => ({
  sketchfabAccessToken: null,
  setSketchfabAccessToken: (token: string) =>
    set({ sketchfabAccessToken: token }),
}));