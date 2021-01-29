import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import { ME } from "../queries";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";
import logo from "../img/logo2-white.png";
import me from "../img/seandan.jpg";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
