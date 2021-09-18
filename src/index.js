import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import app from "./fbase";
console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
