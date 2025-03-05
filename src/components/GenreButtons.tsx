import useAnimeGenres from "../hooks/useAnimeGenres";

const GenreButtons = () => {
  const genres = useAnimeGenres();

  return (
    <div className="flex flex-wrap gap-2 p-6">
      {genres.map((genre) => (
        <button
          key={genre}
          value={genre}
          className="rounded bg-gray-500 px-1 cursor-pointer"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreButtons;
