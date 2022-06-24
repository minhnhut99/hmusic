import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataLayer } from "./components/dataLayer/DataLayer";
import { initialState } from "./components/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initialStates={initialState} reducer>
      <App />
    </DataLayer>
  </React.StrictMode>
);
