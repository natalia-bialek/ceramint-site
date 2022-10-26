import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter base="/ceramint-site/">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
