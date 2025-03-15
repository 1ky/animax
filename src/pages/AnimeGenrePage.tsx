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
    if (data?.Page?.pageInfo?.hasNextPage && page) {
      const newPage = parseInt(page) + 1;
      setSearchParams({ page: newPage.toString() });
    }
  };

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mt-20">
      <h1 className="text-primary mb-4 text-4xl font-bold">
        {genre} TV Series
      </h1>
      <div className="grid min-w-[300px] cursor-pointer grid-cols-2 place-content-around gap-10 md:grid-cols-4 lg:grid-cols-5">
        {data?.Page?.media?.map((anime) => (
          <div
            key={anime?.id}
            className="flex h-[90%] max-w-[250px] flex-nowrap"
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
          className="bg-secondary m-2 cursor-pointer rounded p-2"
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          className="bg-secondary m-2 cursor-pointer rounded p-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimeGenrePage;
