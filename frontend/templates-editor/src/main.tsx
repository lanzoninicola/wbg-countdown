import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import CountdownProvider from "./countdown-provider/countdown-provider";
import FakeWrapper from "./FakeWrapper";

const env = process.env.NODE_ENV;

if (env === "development") {
  console.log("document", document);
  const clockdownNode = document.createElement("div");
  console.log("after document.createElement");
  clockdownNode.id = "clockdown";

  // get body
  const body = document.querySelector("body");
  // append countdown shortcode wrapper to body
  body && body.appendChild(clockdownNode);
}

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("clockdown");

  const ReactApp =
    env === "development" ? withStrictMode(<ClockdownApp />) : <ClockdownApp />;

  if (typeof element !== "undefined" && element !== null) {
    ReactDOM.createRoot(element!).render(ReactApp);
  }
});

const ClockdownApp = () => (
  <ChakraProvider theme={theme}>
    <CountdownProvider runtimeEnvironment="wordpress">
      <App />
    </CountdownProvider>
  </ChakraProvider>
);

const withStrictMode = (children: JSX.Element) => (
  <React.StrictMode>
    <FakeWrapper>{children}</FakeWrapper>
  </React.StrictMode>
);
