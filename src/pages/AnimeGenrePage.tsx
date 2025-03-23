import { useParams, useSearchParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";

const AnimeGenrePage = () => {
  const { genre } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, fetching, error } = useAnimeGeneralQuery({
    sort: "POPULARITY_DESC",
    genreIn: genre,
    page: parseInt(page || "1"),
    perPage: 40,
    type: "ANIME",
    statusIn: undefined,
  });

  const prevPage = () => {
    if (page && parseInt(page) > 1) {
      const newPage = parseInt(page) - 1;
      setSearchParams({ page: newPage.toString() });
    }
  };

  const nextPage = () => {
    if (data?.Page?.pageInfo?.hasNextPage && page) {
      const newPage = parseInt(page) + 1;
      setSearchParams({ page: newPage.toString() });
    }
  };

  if (fetching) return <p className="mt-20 font-bold text-white">Loading...</p>;
  if (error)
    return (
      <p className="mt-20 font-bold text-white">Oh no... {error.message}</p>
    );

  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <h1 className="mb-4 text-4xl font-bold text-white">{genre} Anime</h1>
      </div>
      <div className="grid min-w-[300px] grid-cols-2 place-content-around gap-10 md:grid-cols-4 lg:grid-cols-5">
        {data?.Page?.media?.map((anime) => (
          <div
            key={anime?.id}
            className="flex h-[90%] max-w-[250px] flex-nowrap"
          >
            <AnimeCard
              id={anime?.id}
              image={anime?.coverImage?.large || ""}
              title={anime?.title?.english || anime?.title?.romaji || ""}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-4">
        <button
          onClick={() => {
            prevPage();
          }}
          className="bg-highlight text-primary m-2 cursor-pointer rounded p-2 hover:text-white"
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          className="bg-highlight text-primary m-2 cursor-pointer rounded p-2 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimeGenrePage;
