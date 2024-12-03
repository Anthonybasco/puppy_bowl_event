//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";

//createRoot(document.getElementById("root")).render(
  //<StrictMode>
  //  <App />
 // </StrictMode>
//);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);