import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Albums from "../components/Albums";

import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

const AlbumPage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          <Albums />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
