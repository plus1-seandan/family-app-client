import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { setContext } from "@apollo/client/link/context";

import Routes from "./routes";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
