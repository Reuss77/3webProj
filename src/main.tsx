import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globale.css";
import { FavoritesProvider } from "./context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        {" "}
        {/* 🫶 Ajoute le provider ici */}
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
