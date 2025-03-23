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
    <div className="mt-20 grid grid-cols-1 gap-y-10 text-white">
      <div className="group flex max-h-[354px] min-h-[250px] w-full cursor-pointer gap-4">
        <img
          src={data?.Media?.coverImage?.large || ""}
          alt={data?.Media?.title?.english || data?.Media?.title?.romaji || ""}
          className="hidden md:inline-block"
        />
        <div className="relative w-full overflow-hidden">
          <img
            src={data?.Media?.bannerImage || ""}
            alt={
              data?.Media?.title?.english || data?.Media?.title?.romaji || ""
            }
            className="h-full w-full object-cover contrast-80 transition-transform duration-500 group-hover:scale-110 group-hover:contrast-100"
          />
        </div>
      </div>

      <div className="md:flex md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold drop-shadow-lg">
            {data?.Media?.title?.english || data?.Media?.title?.romaji}
          </h1>
          <p className="text-lg font-semibold">
            {data?.Media?.episodes} Episodes
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold drop-shadow-lg">
            Status: {data?.Media?.status}
          </h2>
          <p className="text-lg font-semibold">
            {data?.Media?.startDate?.year}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-6">
        <ul>
          {data?.Media?.genres?.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
        <div className="col-span-5">
          <h2 className="text-xl font-semibold drop-shadow-lg">Synopsis</h2>
          <div
            dangerouslySetInnerHTML={{ __html: data?.Media?.description || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
