import "../index.css";

interface Props {
  image: string;
  title: string;
}

const AnimeCard = ({ image, title }: Props) => {
  return (
    <div className="group flex flex-col relative w-full h-full rounded">
      <div className="group w-full h-full rounded overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <h1 className="text-accent group text-nowrap font-semibold overflow-hidden overflow-ellipsis">
        {title}
      </h1>
      {/* <div className="hidden group-hover:inline-block w-full h-96 border-2 absolute z-30 bg-green-300"></div> */}
    </div>
  );
};

export default AnimeCard;
