import { BrowserRouter, Route, Routes } from "react-router";
import Mf1Helloworld from "./components/mf1-helloworld";
import Component from "./components/component";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/settings" element={<Mf1Helloworld />} />
        <Route path="/settings/component" element={<Component />} />
        <Route path="/component" element={<Component />} />
      </Routes>
    </BrowserRouter>
  );
}
