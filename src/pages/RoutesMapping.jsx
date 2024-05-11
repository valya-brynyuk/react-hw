import {Route, Routes} from "react-router-dom";
import routesArray from '../routes/routesMapping.js';
import {memo} from "react";

export const RoutesMapping = memo(() => {

  return (
    <Routes>
      {routesArray.map(({path, component: Component}) => {
        return <Route key={path} path={path} element={<Component/>}/>;
      })}
    </Routes>
  );
});
