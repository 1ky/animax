import { useParams } from "react-router-dom";
import useAnimeIdQuery from "../hooks/useAnimeIdQuery";

const AnimeDetailPage = () => {
  const { id } = useParams();

  if (!id) return <p>Null Id</p>;
  const animeId = parseInt(id);

  const { data, fetching, error } = useAnimeIdQuery(animeId);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>{id}</h1>
      <img
        src={data?.Media?.coverImage?.large || ""}
        alt={data?.Media?.title?.english || data?.Media?.title?.romaji || ""}
      />
      <h1>{data?.Media?.title?.english || data?.Media?.title?.romaji}</h1>
      <p>{data?.Media?.description || ""}</p>
      <p>{data?.Media?.status}</p>
      <p>
        {data?.Media?.startDate?.year}-{data?.Media?.startDate?.month}
      </p>
      <p>{data?.Media?.episodes}</p>
      <p>{data?.Media?.genres}</p>
    </div>
  );
};

export default AnimeDetailPage;
