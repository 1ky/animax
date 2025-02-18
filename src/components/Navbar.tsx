import logo from "../assets/logo-placeholder.webp";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-slate-500 h-17 md:h-20 flex justify-between z-20 relative top-0">
      <div className="flex gap-24 mx-7 w-[50%]">
        <div className="flex gap-4">
          <div className="lg:hidden content-center rounded-full cursor-pointer">
            <GiHamburgerMenu size="24px" />
          </div>
          <img
            src={logo}
            alt="animax logo"
            className="w-[55px] h-[55px] m-auto rounded-2xl"
          />
          <h1 className="lowercase content-center mb-1.5 text-3xl font-bold font-stretch-expanded tracking-widest">
            animax
          </h1>
        </div>
        <div className="hidden lg:flex content-center w-[80%] relative">
          <div className="absolute top-[35%] left-4">
            <IoSearchSharp size="24px" />
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
        <div className="flex gap-2 lg:mx-4">
          <div className="lg:hidden content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
            <IoSearchSharp size="20px" />
          </div>
          <div className="hidden lg:inline-block content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
            <FaTelegramPlane size="20px" />
          </div>
          <div className="hidden lg:inline-block content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
            <FaRedditAlien size="20px" />
          </div>
          <div className="hidden lg:inline-block content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer">
            <FaXTwitter size="20px" />
          </div>
        </div>
        <div className="content-center rounded-full p-2 border-2 w-[40px] h-[40px] my-auto cursor-pointer ml-4 mr-7">
          <FiUser size="20px" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
