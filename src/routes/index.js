import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
