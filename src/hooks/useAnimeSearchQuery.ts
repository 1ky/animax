import { useQuery } from "urql";
import { graphql } from "../gql";
import { AnimeSearchQuery } from "../gql/graphql";

const animeSearchQuery = graphql(`
  query AnimeSearch($search: String!) {
    Page {
      media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        sort: meanScore
      }
    }
  }
`);

const useAnimeSearchQuery = (keyword: string) => {
  const [{ data, fetching, error }] = useQuery<AnimeSearchQuery>({
    query: animeSearchQuery,
    variables: {
      search: keyword,
    },
  });

  return { data, fetching, error };
};

export default useAnimeSearchQuery;
