import { useNavigate } from "react-router-dom";
import "../index.css";

interface Props {
  id?: number;
  image: string;
  title: string;
}

const AnimeCard = ({ id, image, title }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex h-full w-full cursor-pointer flex-col rounded text-white hover:underline"
      onClick={() => navigate(`/anime/${id}`)}
    >
      <div className="group h-full w-full overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="h-full w-[300px] object-fill transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h1 className="group overflow-hidden font-semibold text-nowrap overflow-ellipsis">
        {title}
      </h1>
      {/* <div className="hidden group-hover:inline-block w-full h-96 border-2 absolute z-30 bg-green-300"></div> */}
    </div>
  );
};

export default AnimeCard;
