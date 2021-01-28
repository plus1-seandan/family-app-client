import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import { ME } from "../queries";

const HomePage = () => {
  return <Header />;
  //   const { loading, error, data } = useQuery(ME);
  //   if (loading || !data || error) {
  //     console.log(error);
  //     return <div>loading</div>;
  //   }
  //   if (data) {
  //     console.log(data);
  //     return <p>Me</p>;
  //   }
  //   console.log(error);
  //   return <div>Something went wrong</div>;
};

export default HomePage;
