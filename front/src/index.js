import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
