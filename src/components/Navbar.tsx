import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien, FaTelegramPlane } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useOpenStore } from "../store";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const toggleOpen = useOpenStore((state) => state.toggleOpen);

  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search`);
    setSearchParams({ keyword: searchQuery });
  };

  return (
    <nav className="fixed z-30 w-full">
      <div className="bg-complement relative top-0 flex h-20 justify-between border-b-2 text-white">
        <div className="mx-7 flex w-[50%] gap-24">
          <div className="flex gap-4">
            {/* Hamburger menu icon */}
            <div
              onClick={() => toggleOpen()}
              className="cursor-pointer content-center rounded-full"
            >
              <GiHamburgerMenu size="24px" />
            </div>
            {/* Website title */}
            <h1 className="mb-1.5 content-center text-3xl font-bold tracking-widest lowercase font-stretch-expanded">
              <Link to={"/"}>animax</Link>
            </h1>
          </div>
          {/* Searchbar */}
          <div className="relative hidden w-full content-center lg:flex">
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
                className="m-auto h-12 w-[100%] content-center rounded-full border-1 pl-14"
              />
            </form>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-2 lg:mx-4">
            <div className="my-auto h-[40px] w-[40px] cursor-pointer content-center rounded-full border-2 p-2 lg:hidden">
              <IoSearchSharp size="20px" />
            </div>
            <div className="my-auto hidden h-[40px] w-[40px] cursor-pointer content-center rounded-full border-2 p-2 lg:inline-block">
              <FaTelegramPlane size="20px" />
            </div>
            <div className="my-auto hidden h-[40px] w-[40px] cursor-pointer content-center rounded-full border-2 p-2 lg:inline-block">
              <FaRedditAlien size="20px" />
            </div>
            <div className="my-auto hidden h-[40px] w-[40px] cursor-pointer content-center rounded-full border-2 p-2 lg:inline-block">
              <FaXTwitter size="20px" />
            </div>
          </div>
          <div className="my-auto mr-7 ml-4 h-[40px] w-[40px] cursor-pointer content-center rounded-full border-2 p-2">
            <FiUser size="20px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
