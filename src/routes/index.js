import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import AlbumPage from "../pages/AlbumPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/albums" exact component={AlbumPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
