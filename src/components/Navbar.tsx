import logo from "../assets/logo-placeholder.webp";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search`);
    setSearchParams({ keyword: searchQuery });
  };

  return (
    <nav className="bg-slate-500 h-17 md:h-20 flex justify-between z-20 relative top-0">
      <div className="flex gap-24 mx-7 w-[50%]">
        <div className="flex gap-4">
          {/* Hamburger menu icon */}
          <div className="lg:hidden content-center rounded-full cursor-pointer">
            <GiHamburgerMenu size="24px" />
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="animax logo"
            className="w-[55px] h-[55px] m-auto rounded-2xl"
          />

          {/* Website title */}
          <h1 className="lowercase content-center mb-1.5 text-3xl font-bold font-stretch-expanded tracking-widest">
            animax
          </h1>
        </div>

        {/* Searchbar */}
        <div className="hidden lg:flex content-center w-[80%] relative">
          <form className="flex content-center" onSubmit={handleSubmit}>
            <div className="absolute top-[35%] left-4">
              <IoSearchSharp size="24px" />
            </div>
            <input
              type="text"
              name=""
              placeholder="Search anime"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-1 rounded-full w-[100%] h-12 pl-14 placeholder:text-white content-center m-auto"
            />
          </form>
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
