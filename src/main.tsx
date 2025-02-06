import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import Modal from "react-modal";
Modal.setAppElement("#root");

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        error: {
          style: {
            background: "#213547",
            color: "#f0f0f0",
          },
        },
      }}
    />
  </React.StrictMode>
);
