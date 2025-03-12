import useAnimeGeneralQuery from "../hooks/useAnimeGeneralQuery";

const LandingPage = () => {
  const {
    data: popular,
    fetching,
    error,
  } = useAnimeGeneralQuery({
    sort: "POPULARITY_DESC",
    page: 1,
    statusIn: "RELEASING",
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>Most Popular</h1>
      <ul>
        {popular?.Page?.media?.map((anime) => (
          <li key={anime?.id}>
            {anime?.title?.english || anime?.title?.romaji} {anime?.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
