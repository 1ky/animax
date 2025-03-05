import useAnimeGenres from "../hooks/useAnimeGenres";
import { useGenreStore } from "../store";

const GenreButtons = () => {
  const genres = useAnimeGenres();
  const setGenre = useGenreStore((state) => state.setGenre);

  return (
    <div className="flex flex-wrap gap-2 p-6">
      {genres.map((genre) => (
        <button
          key={genre}
          value={genre}
          onClick={() => setGenre(genre)}
          className="rounded bg-gray-500 px-1 cursor-pointer"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreButtons;
