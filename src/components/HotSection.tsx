import AnimeCard from "./AnimeCard";
import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";

const HotSection = () => {
  const { data, fetching, error } = useAnimeGeneralQuery({
    sort: "POPULARITY_DESC",
    perPage: 10,
    statusIn: ["RELEASING"],
    type: "ANIME",
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mt-20">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Popular This Season
      </h1>
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
    </div>
  );
};

export default HotSection;
