import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import movies from "./Reducers/index";

const store = createStore(movies);
console.log("store", store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
