import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./assets/global-styles.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
