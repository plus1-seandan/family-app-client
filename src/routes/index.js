import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import EventsPage from "../pages/EventsPage";
import AlbumsPage from "../pages/AlbumsPage";
import AlbumPage from "../pages/AlbumPage";
import MessagePage from "../pages/MessagePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/albums" exact component={AlbumsPage} />
        <Route path="/events" exact component={EventsPage} />
        <Route path="/albums/:albumId?" exact component={AlbumPage} />
        <Route path="/messages/" exact component={MessagePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
