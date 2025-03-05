import genreCollection from "../data/genres";

const useGetAnimeGenres = () => {
  const genres = genreCollection.data.GenreCollection;

  return genres;
};

export default useGetAnimeGenres;
