import { useQuery } from "urql";
import { graphql } from "../gql";
import { AnimeDetailsQuery } from "../gql/graphql";

const animeIdQuery = graphql(`
  query AnimeDetails($mediaId: Int) {
    Media(id: $mediaId) {
      bannerImage
      averageScore
      coverImage {
        large
        extraLarge
      }
      description
      episodes
      endDate {
        year
        month
        day
      }
      format
      genres
      id
      popularity
      startDate {
        year
        month
        day
      }
      status
      title {
        english
        romaji
        native
      }
      type
    }
  }
`);

const useAnimeIdQuery = (id: number) => {
  const [{ data, fetching, error }] = useQuery<AnimeDetailsQuery>({
    query: animeIdQuery,
    variables: {
      mediaId: id,
    },
  });

  return { data, fetching, error };
};

export default useAnimeIdQuery;
