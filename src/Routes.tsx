import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import AnimeGenrePage from "./pages/AnimeGenrePage";
import AnimeSearchPage from "./pages/AnimeSearchPage";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
      { path: "/genres/:genre", element: <AnimeGenrePage /> },
      { path: "/search", element: <AnimeSearchPage /> },
    ],
  },
]);

export default router;
