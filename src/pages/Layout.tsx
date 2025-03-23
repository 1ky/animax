import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useOpenStore } from "../store";

const Layout = () => {
  const open = useOpenStore((state) => state.open);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="fixed z-20 lg:relative">
          <Sidebar />
        </div>
        <div
          className={`"relative flex h-dvh w-full min-w-[375px] justify-center p-6 ${
            open ? "lg:overflow-auto" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
