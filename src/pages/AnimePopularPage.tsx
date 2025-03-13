import AnimeCard from "../components/AnimeCard";
import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";
import { useSearchParams } from "react-router-dom";

const AnimePopularPage = () => {
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
    statusIn: "FINISHED",
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
      <h1 className="text-primary font-bold text-4xl mb-4 ">
        Most Popular TV Series
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-around gap-10 min-w-[300px] cursor-pointer">
        {popular?.Page?.media?.map((anime) => (
          <div
            key={anime?.id}
            className="flex flex-nowrap max-w-[250px] h-[90%]"
          >
            <AnimeCard
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
          className="bg-secondary m-2 p-2 rounded cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          className="bg-secondary m-2 p-2 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimePopularPage;
