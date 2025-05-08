import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./provider/DarkModeProvider.tsx";
import { RouterProvider } from "react-router";
import { app_router } from "./router/routes.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      {/* <App /> */}
      <RouterProvider router={app_router} />
    </DarkModeProvider>
  </StrictMode>
);
