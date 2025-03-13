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
        <div className="flex justify-center w-full p-6 relative h-dvh overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
