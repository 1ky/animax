import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="relative">
          <Sidebar />
        </div>
        <div className="relative flex h-dvh w-full min-w-[375px] justify-center overflow-scroll p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
