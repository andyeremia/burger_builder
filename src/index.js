import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(app);
reportWebVitals();
