import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="fixed z-20 lg:relative">
          <Sidebar />
        </div>
        <div className="mt-20 flex flex-col p-6 font-bold text-white">
          <h1 className="text-4xl font-bold">
            <Link to={"/"}>Oh no...</Link>
          </h1>
          <p className="opacity-[75%]">
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "An unexpected error occured"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
