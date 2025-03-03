import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./components/Homepage";
import AnimeDetailPage from "./pages/AnimeDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
    ],
  },
]);

export default router;
