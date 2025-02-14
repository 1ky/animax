import logo from "../assets/logo-placeholder.webp";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 h-24 flex justify-between">
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
        <div className="content-center w-[80%]">
          <input
            type="text"
            name="search"
            placeholder="Search anime"
            className="border-2 rounded-full w-[100%] h-12 placeholder:text-white"
          />
        </div>
      </div>
      <div>
        <p>socials</p>
      </div>
    </nav>
  );
};

export default Navbar;
