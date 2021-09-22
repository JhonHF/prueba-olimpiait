import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { store } from "./store";
import { AppRoutes } from "./routes";

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
