import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/Context";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
