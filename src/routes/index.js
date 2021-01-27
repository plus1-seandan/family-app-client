import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
