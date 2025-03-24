import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import "./index.css";

// UQRL Client Provider
const client = new Client({
  url: "https://graphql.anilist.co",
  exchanges: [cacheExchange, fetchExchange],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
