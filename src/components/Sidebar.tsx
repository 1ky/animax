import { FiHome } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  IoCalendarClearOutline,
  IoChatboxOutline,
  IoLanguageOutline,
} from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { TbCalendarCheck, TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAdultStore } from "../store";

const Sidebar = () => {
  const adultSwitch = useAdultStore((state) => state.adult);
  const setAdultSwitch = useAdultStore((state) => state.setAdult);

  return (
    <div className="hidden sm:inline-block w-64 h-screen relative left-0 top-0 border-r-2 z-10 p-6">
      {/* Sidebar group 1 items */}
      <div className="flex flex-col gap-4">
        <Link to="/">
          <div className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
            <div>
              <FiHome size="20px" />
            </div>
            <span>Home</span>
          </div>
        </Link>
        <div className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <HiOutlineLightningBolt size="20px" />
          </div>
          <span>Newsfeed</span>
        </div>
        <div className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <IoCalendarClearOutline size="20px" />
          </div>
          <span>New Releases</span>
        </div>
        <div className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <TbTargetArrow size="20px" />
          </div>
          <span>Most Popular</span>
        </div>
      </div>

      {/* Horizontal separator */}
      <div className="my-6">
        <hr />
      </div>

      {/* Sidebar group items 2 */}
      <div className="flex flex-col gap-4">
        <div className="hover:bg-slate-800 h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <MdOutlineWifiTethering size="20px" />
          </div>
          <span>Recommendations</span>
        </div>
        <div className="hover:bg-slate-800 h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <TbCalendarCheck size="20px" />
          </div>
          <span>Schedule</span>
        </div>
        <div className="hover:bg-slate-800 h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <IoChatboxOutline size="20px" />
          </div>
          <span>Community</span>
        </div>
      </div>

      {/* Horizontal separator */}
      <div className="my-6">
        <hr />
      </div>

      {/* Sidebar language control group */}
      <div className="border-[1px] rounded-xl">
        <div className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center">
          <div>
            <IoLanguageOutline size="20px" />
          </div>
          <span>EN Title</span>
          <button className="w-10 h-[25px] uppercase border-[1px] rounded-2xl text-xs align-middle ml-auto mr-0 cursor-pointer">
            off
          </button>
        </div>
        <hr />
        <div
          onClick={() => setAdultSwitch(!adultSwitch)}
          className="h-12 rounded-xl cursor-pointer content-center p-4 gap-5 flex flex-row items-center"
        >
          <div>
            <IoLanguageOutline size="20px" />
          </div>
          <span>Adult</span>
          <button className="w-10 h-[25px] uppercase border-[1px] rounded-2xl text-xs align-middle ml-auto mr-0 cursor-pointer">
            {adultSwitch ? "on" : "off"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
