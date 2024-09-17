import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./components/context/index.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>
);
