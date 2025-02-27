import { useState } from "react";
import jujutsu from "../assets/jujutsu-kaisen.jpg";
import solo from "../assets/solo-leveling.jpeg";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const images = [jujutsu, solo];

  const previous = () =>
    current <= 0 ? setCurrent(images.length - 1) : setCurrent(current - 1);
  const next = () =>
    current >= images.length - 1 ? setCurrent(0) : setCurrent(current + 1);

  return (
    <div className="p-6 relative">
      {/* Carousel image map */}
      <div className="flex flex-row overflow-hidden relative max-w-[700px] max-h-[400px] ">
        {images.map((image) => (
          <img
            src={image}
            alt="Carousel Image"
            className="rounded transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          />
        ))}
      </div>

      {/* Slider component definition */}
      <div className="bg-black opacity-50 w-min rounded-full p-2 absolute bottom-8 right-8">
        <div className="flex items-center justify-center gap-2">
          <div onClick={() => previous()}>
            <IoChevronBackOutline size={20} />
          </div>
          {images.map((_, i) => (
            <div
              className={`transition-all h-2 bg-white rounded-full ${
                current === i ? "w-4" : "w-2 opacity-50"
              }`}
            />
          ))}
          <div onClick={() => next()}>
            <IoChevronForwardOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
