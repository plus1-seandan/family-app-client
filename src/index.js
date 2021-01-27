import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

document.title = "Family App";
ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
