import AnimeCard from "../components/AnimeCard";
import GenreButtons from "../components/GenreButtons";
import useAnimeGenreQuery from "../hooks/useAnimeGenreQuery";
import { useGenreStore } from "../store";

const AnimeGenrePage = () => {
  const selectedGenre = useGenreStore((state) => state.genre);
  const { data, fetching, error } = useAnimeGenreQuery(selectedGenre);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>{selectedGenre} Anime</h1>
      <GenreButtons />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 p-6 w-full min-w-[300px] cursor-pointer">
        {data?.Page?.media?.map((anime) => (
          <div key={anime?.id}>
            <AnimeCard
              image={anime?.coverImage?.large || ""}
              title={anime?.title?.english || anime?.title?.romaji || ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeGenrePage;
