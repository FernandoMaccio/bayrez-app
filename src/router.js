import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeScreen, Login, Register, EditUser, Nosotros, Servicios, Contacto, Aplicacion } from './views';

const routes = [
  {
    path: "/",
    component: HomeScreen,
    exact: true
  },
  {
    path: "/contacto",
  component: Contacto
  },
    {
      path: "/nosotros",
    component: Nosotros
  },
  {
  path: "/servicios",
  component: Servicios
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/editUser",
    component: EditUser
  },
  {
    path: "/aplicacion",
    component: Aplicacion
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
