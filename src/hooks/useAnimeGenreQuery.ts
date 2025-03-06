import { useQuery } from "urql";
import { graphql } from "../gql";
import { AnimeGenreQuery } from "../gql/graphql";

const animeGenreQuery = graphql(`
  query AnimeGenre(
    $page: Int
    $perPage: Int
    $type: MediaType
    $statusIn: [MediaStatus]
    $genreIn: [String]
    $genreNotIn: [String]
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
        type: $type
        status_in: $statusIn
        genre_in: $genreIn
        genre_not_in: $genreNotIn
      ) {
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

const useAnimeGenreQuery = (genre: string) => {
  const [{ data, fetching, error }] = useQuery<AnimeGenreQuery>({
    query: animeGenreQuery,
    variables: {
      genreIn: genre,
      genreNotIn: null,
      page: 1,
      perPage: 20,
      type: "ANIME",
      statusIn: "RELEASING",
    },
  });

  return { data, fetching, error };
};

export default useAnimeGenreQuery;
