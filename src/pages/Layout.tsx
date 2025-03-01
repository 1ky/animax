import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-slate-600">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
