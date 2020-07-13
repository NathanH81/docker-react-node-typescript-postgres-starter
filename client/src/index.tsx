import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { chakraTheme } from "./chakraTheme";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:40000/graphql",
  }),
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={chakraTheme}>
        <ColorModeProvider>
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
