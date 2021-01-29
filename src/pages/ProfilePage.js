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

const ProfilePage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
// <div class="grid">
//   <header>Header</header>

//   <aside class="sidebar-left">Left Sidebar</aside>

//   <article>Article</article>

//   <aside class="sidebar-right">Right Sidebar</aside>

//   <footer>Footer</footer>
// </div>

// .grid {
//   display: grid;
//   grid-template-columns: 150px auto 150px;
//   grid-template-rows: repeat(3, 100px);
//   grid-gap: 1em;
// }

// header,
// aside,
// article,
// footer {
//   background: #eaeaea;
//   padding: 1em;
// }

// header, footer {
//   grid-column: 1 / 4;
// }

// /* Demo Specific Styles */
// body {
//   margin: 0 auto;
//   max-width: 56em;
//   padding: 1em 0;
// }

// .grid > * {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
