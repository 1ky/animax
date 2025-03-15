interface Props {
  title: string;
  image: string;
}

const GenreSelector = ({ title, image }: Props) => {
  return (
    <div className="bg-secondary group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <h1 className="absolute rounded-lg bg-black/30 p-2 text-2xl font-bold text-nowrap text-white/70 drop-shadow-lg group-hover:text-white">
        {title}
      </h1>
    </div>
  );
};

export default GenreSelector;
