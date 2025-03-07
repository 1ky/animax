import { useNavigate } from "react-router-dom";
import useAnimeGenres from "../hooks/useAnimeGenres";
import { useGenrePageStore, useGenreStore } from "../store";

const GenreButtons = () => {
  const genres = useAnimeGenres();
  const setGenre = useGenreStore((state) => state.setGenre);
  const setPage = useGenrePageStore((state) => state.setPage);

  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-2 p-6">
      {genres.map((genre) => (
        <button
          key={genre}
          value={genre}
          onClick={() => {
            setGenre(genre);
            setPage(1);
            navigate(`/genres/${genre}`);
          }}
          className="rounded bg-gray-500 px-1 cursor-pointer"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreButtons;
