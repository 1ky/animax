import { FaChevronCircleRight } from "react-icons/fa";
import { FiHome, FiMoreVertical, FiUser } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import { MdNoAdultContent } from "react-icons/md";

const ExpSidebar = () => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r-4 border-primary shadow-sm w-64">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button className="p-1.5 rounded-lg text-primary hover:text-secondary">
            <FaChevronCircleRight size="32px" />
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem icon={<FiHome />} text="Home" />
          <SidebarItem icon={<MdNoAdultContent />} text="Adult Content" />
        </ul>

        <div className="border-t flex p-3 items-center">
          <div className="w-10 h-10">
            <FiUser size="36px" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="leading-4 mx-2">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <FiMoreVertical />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default ExpSidebar;
