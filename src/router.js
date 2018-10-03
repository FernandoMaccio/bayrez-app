import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, Login, Register, EditUser } from './views';

const routes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true
  },
  {
    path: "/login",
    component: Loginl,
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/editUser",
    component: EditUser
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
