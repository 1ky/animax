import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./components/Homepage";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import AnimeGenrePage from "./pages/AnimeGenrePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/anime/:id", element: <AnimeDetailPage /> },
      { path: "/genres", element: <AnimeGenrePage /> },
    ],
  },
]);

export default router;
