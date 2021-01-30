import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Album from "../components/Album";

import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

const AlbumPage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          <Album />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
