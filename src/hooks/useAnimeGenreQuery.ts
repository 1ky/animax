import { useQuery } from "urql";
import { graphql } from "../gql";
import { AnimeGenreQuery } from "../gql/graphql";
import { useAdultStore } from "../store";

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
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`);

const useAnimeGenreQuery = (genre: string, currentPage: number) => {
  const adult = useAdultStore((state) => state.adult);
  const exclude = adult ? null : "Hentai";

  const [{ data, fetching, error }] = useQuery<AnimeGenreQuery>({
    query: animeGenreQuery,
    variables: {
      genreIn: genre,
      genreNotIn: exclude,
      page: currentPage,
      perPage: 20,
      type: "ANIME",
      statusIn: "RELEASING",
    },
  });

  return { data, fetching, error };
};

export default useAnimeGenreQuery;
