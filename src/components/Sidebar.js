import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import { ME } from "../queries";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import { Link } from "react-router-dom";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";
import logo from "../img/logo2-white.png";
import me from "../img/seandan.jpg";

const Sidebar = () => {
  return (
    <nav class="sidebar">
      <ul class="sidebar-nav">
        <li class="sidebar-nav__item sidebar-nav__item">
          <Link to="/home" class="sidebar-nav__link">
            <HomeIcon class="sidebar-nav__icon" />
            <span>My Family</span>
          </Link>
        </li>
        <li class="sidebar-nav__item">
          <Link to="/events" class="sidebar-nav__link">
            <EventIcon class="sidebar-nav__icon" />
            <span>Upcoming Events</span>
          </Link>
        </li>
        <li class="sidebar-nav__item">
          <Link to="/albums" class="sidebar-nav__link">
            <PhotoAlbumIcon class="sidebar-nav__icon" />
            <span>Photo Albums</span>
          </Link>
        </li>
      </ul>
      <div class="legal">&copy; 2021 by Sean Dan. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
