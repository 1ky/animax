import { useNavigate } from "react-router-dom";
import useGetAnimeGenres from "../hooks/useAnimeGenres";
import { useGenreStore } from "../store";
import GenreSelector from "../components/GenreSelector";

const GenreSelectPage = () => {
  const genres = useGetAnimeGenres();

  const setGenre = useGenreStore((state) => state.setGenre);
  const navigate = useNavigate();

  return (
    <div className="mt-20">
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
        {genres.map((genre) => (
          <div
            key={genre.genre}
            onClick={() => {
              setGenre(genre.genre);
              navigate(`/genres/${genre.genre}`);
            }}
            className="h-full w-full"
          >
            <GenreSelector title={genre.genre} image={genre.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelectPage;
