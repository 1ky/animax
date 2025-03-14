import { useNavigate } from "react-router-dom";
import useGetAnimeGenres from "../hooks/useAnimeGenres";
import { useGenreStore } from "../store";

const GenreSelectPage = () => {
  const genres = useGetAnimeGenres();

  const setGenre = useGenreStore((state) => state.setGenre);
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full gap-5">
        {genres.map((genre) => (
          <div
            key={genre}
            onClick={() => {
              setGenre(genre);
              navigate(`/genres/${genre}`);
            }}
            className="flex py-20 px-5 bg-secondary justify-center items-center rounded-2xl cursor-pointer overflow-ellipsis overflow-hidden"
          >
            <h1 className="text-2xl font-bold text-primary text-nowrap overflow-ellipsis">
              {genre}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelectPage;
