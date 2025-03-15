import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import AnimeGenrePage from "./pages/AnimeGenrePage";
import AnimeSearchPage from "./pages/AnimeSearchPage";
import AnimePopularPage from "./pages/AnimePopularPage";
import GenreSelectPage from "./pages/GenreSelectPage";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
      {
        path: "/genres",
        children: [
          { index: true, element: <GenreSelectPage /> },
          { path: "/genres/:genre", element: <AnimeGenrePage /> },
        ],
      },
      { path: "/popular", element: <AnimePopularPage /> },
      { path: "/search", element: <AnimeSearchPage /> },
    ],
  },
]);

export default router;
