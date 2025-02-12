import { BrowserRouter, Route, Routes } from "react-router";
import Mf1Helloworld from "./components/mf1-helloworld";
import Component from "./components/component";
import { Provider } from "react-redux";
import store from "./store/store";

import "./styles/globals.css";

export default function Root(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mf1Helloworld />} />
          <Route path="/settings" element={<Mf1Helloworld />} />
          <Route path="/settings/component" element={<Component />} />
          <Route path="/component" element={<Component />} />
          <Route path="/mf1" element={<Mf1Helloworld />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
