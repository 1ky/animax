import { FiHome } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  IoCalendarClearOutline,
  IoChatboxOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { TbCalendarCheck, TbTargetArrow } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useAdultStore, useOpenStore } from "../store";

const Sidebar = () => {
  const adultSwitch = useAdultStore((state) => state.adult);
  const setAdultSwitch = useAdultStore((state) => state.setAdult);
  const open = useOpenStore((state) => state.open);

  return (
    <div className="fixed z-20 lg:relative">
      <div
        className={`bg-complement relative top-0 left-0 z-10 mt-20 min-h-[calc(100vh-5rem)] w-64 border-r-2 p-6 text-white ${
          open ? "inline-block" : "hidden"
        }`}
      >
        {/* Sidebar group 1 items */}
        <div className="flex flex-col gap-4">
          {/* Home */}
          <NavLink to="/">
            <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
              <div>
                <FiHome size="20px" />
              </div>
              <span>Home</span>
            </div>
          </NavLink>

          {/* Genres */}
          <NavLink to="/genres">
            <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
              <div>
                <HiOutlineLightningBolt size="20px" />
              </div>
              <span>Genres</span>
            </div>
          </NavLink>

          {/* New Releases */}
          <NavLink to="/upcoming">
            <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
              <div>
                <IoCalendarClearOutline size="20px" />
              </div>
              <span>New Releases</span>
            </div>
          </NavLink>

          {/* Popular Anime */}
          <NavLink to="/popular">
            <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
              <div>
                <TbTargetArrow size="20px" />
              </div>
              <span>Most Popular</span>
            </div>
          </NavLink>
        </div>

        {/* Horizontal separator */}
        <div className="my-6 text-white opacity-75">
          <hr />
        </div>

        {/* Sidebar group items 2 */}
        <div className="flex flex-col gap-4">
          <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
            <div>
              <MdOutlineWifiTethering size="20px" />
            </div>
            <span>Recommendations</span>
          </div>
          <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
            <div>
              <TbCalendarCheck size="20px" />
            </div>
            <span>Schedule</span>
          </div>
          <div className="hover:bg-highlight hover:text-primary flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
            <div>
              <IoChatboxOutline size="20px" />
            </div>
            <span>Community</span>
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="my-6 text-white opacity-75">
          <hr />
        </div>

        {/* Sidebar language control group */}
        <div className="rounded-xl border-[1px]">
          {/* <div className="flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4">
            <div>
              <IoLanguageOutline size="20px" />
            </div>
            <span>EN Title</span>
            <button className="mr-0 ml-auto h-[25px] w-10 cursor-pointer rounded-2xl border-[1px] align-middle text-xs uppercase">
              off
            </button>
          </div> */}
          {/* <hr /> */}
          <div
            onClick={() => setAdultSwitch(!adultSwitch)}
            className="flex h-12 cursor-pointer flex-row content-center items-center gap-5 rounded-xl p-4"
          >
            <div>
              <IoLanguageOutline size="20px" />
            </div>
            <span>Adult</span>
            <button
              className={`mr-0 ml-auto h-[25px] w-10 cursor-pointer rounded-2xl border-[1px] align-middle text-xs uppercase ${adultSwitch ? "text-primary font-extrabold" : ""}`}
            >
              {adultSwitch ? "on" : "off"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
