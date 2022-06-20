import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MarkersContextProvider } from "./context/MarkerContext";
import { ModalContextProvider } from "./context/ModalContext";
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <MarkersContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </MarkersContextProvider>
  </QueryClientProvider>
);

reportWebVitals();
