import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NameProvider } from "./context/createContext.tsx";
import { BrowserRouter, Router } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <RouterProvider router={Router}> */}

    {/* <BrowserRouter> */}
      <NameProvider>
        <App />
      </NameProvider>
      {/* </RouterProvider> */}
    {/* </BrowserRouter> */}
  </>
);
