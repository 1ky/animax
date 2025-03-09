import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./components/Homepage";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import AnimeGenrePage from "./pages/AnimeGenrePage";
import AnimeSearchPage from "./pages/AnimeSearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
      { path: "/genres/:genre", element: <AnimeGenrePage /> },
      { path: "/search", element: <AnimeSearchPage /> },
    ],
  },
]);

export default router;
