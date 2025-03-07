import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import GenreButtons from "../components/GenreButtons";
import useAnimeGenreQuery from "../hooks/useAnimeGenreQuery";
import { useGenrePageStore } from "../store";

const AnimeGenrePage = () => {
  const { genre } = useParams();

  const page = useGenrePageStore((state) => state.page);
  const setPage = useGenrePageStore((state) => state.setPage);
  const setPrev = () => setPage(page - 1);
  const setNext = () => setPage(page + 1);
  console.log(page);

  const { data, fetching, error } = useAnimeGenreQuery(genre || "", page);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>{genre} Anime</h1>
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
      <div className="flex justify-center">
        <button
          onClick={() => setPrev()}
          disabled={data?.Page?.pageInfo?.currentPage === 1}
          className="p-2 rounded m-2 bg-gray-500 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => setNext()}
          disabled={data?.Page?.pageInfo?.hasNextPage === false}
          className="p-2 rounded m-2 bg-gray-500 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimeGenrePage;
