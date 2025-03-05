import { create } from "zustand";

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
