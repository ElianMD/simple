import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (container == null) throw new Error('No container with id "root" found');

const root = ReactDOM.createRoot(container);
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
root.render(app);
