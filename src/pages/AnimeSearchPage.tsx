import { useSearchParams } from "react-router-dom";
import useAnimeSearchQuery from "../hooks/useAnimeSearchQuery";

const AnimeSearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const { data, fetching, error } = useAnimeSearchQuery(keyword || "");

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      AnimeSearchPage
      <p>Search Keyword: {keyword}</p>
      <ul>
        {data?.Page?.media?.map((anime) => (
          <li key={anime?.id}>
            {anime?.title?.english || anime?.title?.romaji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeSearchPage;
