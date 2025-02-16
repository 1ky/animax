import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo-placeholder.webp";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-24 flex justify-between">
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
            <CiSearch size="30px" />
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
        <div className="border-1 content-center rounded-full p-3 h-[55px] my-auto cursor-pointer mx-1.5">
          <FaTelegramPlane size="30px" />
        </div>
        <div className="border-1 content-center rounded-full p-3 h-[55px] my-auto cursor-pointer mx-1.5">
          <FaRedditAlien size="30px" />
        </div>
        <div className="border-1 content-center rounded-full p-3 h-[55px] my-auto cursor-pointer mx-1.5">
          <FaXTwitter size="30px" />
        </div>
        <div className="border-1 content-center rounded-full p-3 h-[55px] my-auto cursor-pointer mx-12">
          <FiUser size="30px" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
