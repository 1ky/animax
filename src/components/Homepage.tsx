import { useQuery } from "urql";
import { graphql } from "../gql";
import { PageQuery } from "../gql/graphql";
import AnimeCard from "./AnimeCard";
import Carousel from "./Carousel";

const animePageQuery = graphql(`
  query Page(
    $page: Int
    $perPage: Int
    $type: MediaType
    $statusIn: [MediaStatus]
  ) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, status_in: $statusIn) {
        id
        genres
        coverImage {
          medium
          large
          extraLarge
        }
        title {
          english
          native
          romaji
        }
        status
        description
      }
    }
  }
`);

const Homepage = () => {
  const [{ data, fetching, error }] = useQuery<PageQuery>({
    query: animePageQuery,
    variables: {
      page: 2,
      perPage: 20,
      type: "ANIME",
      statusIn: "RELEASING",
    },
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 p-6 w-full min-w-[300px]">
        {data?.Page?.media?.map((anime) => (
          <div key={anime?.id} className="">
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
