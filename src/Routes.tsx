import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import AnimeGenrePage from "./pages/AnimeGenrePage";
import AnimeSearchPage from "./pages/AnimeSearchPage";
import Homepage from "./components/Homepage";
import AnimePopularPage from "./pages/AnimePopularPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
      { path: "/genres/:genre", element: <AnimeGenrePage /> },
      { path: "/popular", element: <AnimePopularPage /> },
      { path: "/search", element: <AnimeSearchPage /> },
    ],
  },
]);

export default router;
