import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="mt-20 sm:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
