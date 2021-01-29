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
import HomeDetail from "./HomeDetail";

const Home = () => {
  return (
    <main class="home-view">
      <div class="gallery">
        <figure class="gallery__item">
          <img src={nat1} alt="Family Photo 1" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={nat2} alt="Family Photo 2" class="gallery__photo" />
        </figure>
        <figure class="gallery__item">
          <img src={nat3} alt="Family Photo 2" class="gallery__photo" />
        </figure>
      </div>
      <div class="overview">
        <h1 class="overview__heading">My Family</h1>
      </div>
      <HomeDetail />
    </main>
  );
};

export default Home;
