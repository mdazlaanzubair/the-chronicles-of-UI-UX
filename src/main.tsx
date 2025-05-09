import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DarkModeProvider } from "./provider/DarkModeProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { app_router } from "./routes/routes.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      {/* <App /> */}
      <RouterProvider router={app_router} />
    </DarkModeProvider>
  </StrictMode>
);
