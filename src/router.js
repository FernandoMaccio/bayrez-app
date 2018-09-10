import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, AboutScreen } from './views';

const routes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true
  },
  {
    path: "/about",
    component: AboutScreen,
  }
];

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
