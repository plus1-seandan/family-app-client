import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={RegisterPage} />
        <Route path="/" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
