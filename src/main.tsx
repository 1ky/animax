import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

// UQRL Client Provider
const client = new Client({
  url: "https://graphql.anilist.co",
  exchanges: [cacheExchange, fetchExchange],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>
);
