import { create } from "zustand";

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
