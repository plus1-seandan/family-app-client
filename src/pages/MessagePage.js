import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Chat from "../components/Chat";

import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";
import { ME, PROFILE } from "../queries";

const MessagePage = () => {
  const { loading, error, data } = useQuery(PROFILE);
  console.log({ data, error });
  return (
    <div class="general-layout">
      <div class="container">
        <HomeHeader />
        <div class="general-content">
          <Sidebar />
          {data && <Chat user={data?.getProfile} />}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
