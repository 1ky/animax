import { create } from "zustand";

// Store or managing the sidebar open/closed state
type OpenStore = {
  open: boolean;
  toggleOpen: () => void;
};

export const useOpenStore = create<OpenStore>((set) => ({
  open: true,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

// Store for managing selected genre state
type GenreStore = {
  genre: string;
  setGenre: (selectedGenre: string) => void;
  unsetGenre: () => void;
};

export const useGenreStore = create<GenreStore>((set) => ({
  genre: "",
  setGenre: (selectedGenre) => {
    set({ genre: selectedGenre });
  },
  unsetGenre: () => {
    set({ genre: "" });
  },
}));

type GenrePageStore = {
  page: number;
  setPage: (pageNumber: number) => void;
};

export const useGenrePageStore = create<GenrePageStore>((set) => ({
  page: 1,
  setPage: (pageNumber) => {
    set({ page: pageNumber });
  },
}));

// Store for managing the optional adult content state
type AdultStore = {
  adult: boolean;
  setAdult: (state: boolean) => void;
};

export const useAdultStore = create<AdultStore>((set) => ({
  adult: false,
  setAdult: (adultValue) => {
    set({ adult: adultValue });
  },
}));
