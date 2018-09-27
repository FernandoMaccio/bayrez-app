import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, Login, Register } from './views';

const routes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
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
