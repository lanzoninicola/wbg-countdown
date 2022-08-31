import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import CountdownProvider from "./countdown-provider/countdown-provider";
import FakeWrapper from "./FakeWrapper";
import "./style/global.css";
import createDevRoot from "./main.dev";
import { OnboardingProvider } from "./onboarding";
import PremiumFeatureProvider from "./premium-features-provider/premium-features-provider";

const env = process.env.NODE_ENV;

if (env === "development") {
  createDevRoot();
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
    <OnboardingProvider>
      <PremiumFeatureProvider
        config={{
          landingPageUrl: "https://clockdown.lanzoninicola.com.br",
        }}
      >
        <CountdownProvider>
          <App />
        </CountdownProvider>
      </PremiumFeatureProvider>
    </OnboardingProvider>
  </ChakraProvider>
);

const withStrictMode = (children: JSX.Element) => (
  <React.StrictMode>
    <FakeWrapper>{children}</FakeWrapper>
  </React.StrictMode>
);
