import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { MainRoutes } from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
