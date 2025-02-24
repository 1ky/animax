import { useQuery } from "urql";
import { graphql } from "../gql";
import { AnimeTitleQuery } from "../gql/graphql";

const animePageQuery = graphql(`
  query AnimeTitle {
    Media(type: ANIME) {
      title {
        english
      }
    }
  }
`);

const Homepage = () => {
  const [{ data, fetching, error }] = useQuery<AnimeTitleQuery>({
    query: animePageQuery,
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <ul>{data?.Media?.title?.english}</ul>
    </div>
  );
};

export default Homepage;
