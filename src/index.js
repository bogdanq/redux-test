import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "./my-redux/provider";
import { Timer } from "./components";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById("app")
);
