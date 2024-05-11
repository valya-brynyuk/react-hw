import React from "react";
import {RoutesMapping} from "./pages/RoutesMapping.jsx";
import {BrowserRouter} from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <RoutesMapping/>
    </BrowserRouter>
  );
};
