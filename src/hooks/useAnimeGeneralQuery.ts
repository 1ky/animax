import { useQuery } from "urql";
import { graphql } from "../gql";

import { useAdultStore } from "../store";
import { AnimeQuery } from "../gql/graphql";

interface Props {
  page?: number;
  perPage?: number;
  type?: "ANIME";
  statusIn?: string[];
  genreIn?: string;
  genreNotIn?: string;
  sort?: string;
  format?: string;
  status?: string;
  isAdult?: boolean;
  search?: string;
}

const animeGeneralQuery = graphql(`
  query Anime(
    $page: Int
    $perPage: Int
    $type: MediaType
    $statusIn: [MediaStatus]
    $genreIn: [String]
    $genreNotIn: [String]
    $sort: [MediaSort]
    $format: MediaFormat
    $status: MediaStatus
    $isAdult: Boolean
    $search: String
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
        type: $type
        status_in: $statusIn
        genre_in: $genreIn
        genre_not_in: $genreNotIn
        sort: $sort
        format: $format
        status: $status
        isAdult: $isAdult
        search: $search
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

const useAnimeGeneralQuery = ({
  page,
  perPage,
  type,
  statusIn,
  genreIn,
  //   genreNotIn,
  sort,
  format,
  status,
  isAdult,
  search,
}: Props) => {
  const adult = useAdultStore((state) => state.adult);
  const exclude = adult ? null : "Hentai";

  const [{ data, fetching, error }] = useQuery<AnimeQuery>({
    query: animeGeneralQuery,
    variables: {
      page: page,
      perPage: perPage,
      type: type,
      statusIn: statusIn,
      genreIn: genreIn,
      genreNotIn: exclude,
      sort: sort,
      format: format,
      status: status,
      isAdult: isAdult,
      search: search,
    },
  });

  return { data, fetching, error };
};

export default useAnimeGeneralQuery;
