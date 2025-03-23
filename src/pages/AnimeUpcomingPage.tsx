import { useSearchParams } from "react-router-dom";
import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";
import AnimeCard from "../components/AnimeCard";

const AnimeUpcomingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const {
    data: popular,
    fetching,
    error,
  } = useAnimeGeneralQuery({
    sort: "POPULARITY_DESC",
    page: parseInt(page || "1"),
    perPage: 40,
    statusIn: ["RELEASING", "NOT_YET_RELEASED"],
    format: "TV",
  });

  const prevPage = () => {
    if (page && parseInt(page) > 1) {
      const newPage = parseInt(page) - 1;
      setSearchParams({ page: newPage.toString() });
    }
  };

  const nextPage = () => {
    if (popular?.Page?.pageInfo?.hasNextPage && page) {
      const newPage = parseInt(page) + 1;
      setSearchParams({ page: newPage.toString() });
    }
  };

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mt-20">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Releasing and Upcoming Anime
      </h1>
      <div className="grid min-w-[300px] grid-cols-2 place-content-around gap-10 md:grid-cols-4 lg:grid-cols-5">
        {popular?.Page?.media?.map((anime) => (
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

export default AnimeUpcomingPage;
