import AnimeCard from "../components/AnimeCard";
import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";

const AnimePopularPage = () => {
  const {
    data: popular,
    fetching,
    error,
  } = useAnimeGeneralQuery({
    sort: "POPULARITY_DESC",
    page: 1,
    perPage: 40,
    statusIn: "RELEASING",
    format: "TV",
  });

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
            // onClick={() => navigate(`/anime/${anime?.id}`)}
          >
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

export default AnimePopularPage;
