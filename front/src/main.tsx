import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { themeLight } from "./themes/themeLight.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <App />
    </ThemeProvider>
    ,
  </React.StrictMode>
);
