import AnimeCard from "./AnimeCard";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";
import useAnimePageQuery from "../hooks/useAnimePageQuery";

const Homepage = () => {
  const navigate = useNavigate();

  const { data, fetching, error } = useAnimePageQuery();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 p-6 w-full min-w-[300px] cursor-pointer">
        {data?.Page?.media?.map((anime) => (
          <div
            key={anime?.id}
            className=""
            onClick={() => navigate(`/anime/${anime?.id}`)}
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

export default Homepage;
