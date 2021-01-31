import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Chat from "../components/Chat";

import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

const MessagePage = () => {
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
