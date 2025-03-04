import { graphql } from "../gql";
import { useQuery } from "urql";
import { PageQuery } from "../gql/graphql";

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

const useAnimePageQuery = () => {
  const [{ data, fetching, error }] = useQuery<PageQuery>({
    query: animePageQuery,
    variables: {
      page: 2,
      perPage: 20,
      type: "ANIME",
      statusIn: "RELEASING",
    },
  });

  return { data, fetching, error };
};

export default useAnimePageQuery;
