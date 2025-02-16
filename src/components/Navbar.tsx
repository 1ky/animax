import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo-placeholder.webp";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-17 md:h-20 flex justify-between">
      <div className="flex gap-24 mx-7 w-[50%]">
        <div className="flex gap-4">
          <img
            src={logo}
            alt="animax logo"
            className="w-[55px] h-[55px] m-auto rounded-2xl"
          />
          <h1 className="lowercase content-center mb-1.5 text-3xl font-bold font-stretch-expanded tracking-widest">
            animax
          </h1>
        </div>
        <div className="flex content-center w-[80%] relative">
          <div className="absolute top-[35%] left-4">
            <CiSearch size="24px" />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search anime"
            className="border-1 rounded-full w-[100%] h-12 pl-14 placeholder:text-white content-center m-auto"
          />
        </div>
      </div>
      <div className="flex">
        <div className="content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
          <FaTelegramPlane size="20px" />
        </div>
        <div className="content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
          <FaRedditAlien size="20px" />
        </div>
        <div className="content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
          <FaXTwitter size="20px" />
        </div>
        <div className="content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
          <FiUser size="20px" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
