import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NameProvider } from "./context/createContext.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <NameProvider>
      <App />
    </NameProvider>
  </>
);
