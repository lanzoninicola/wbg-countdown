import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import FakeWrapper from "./FakeWrapper";
import "./style/global.css";
import createDevRoot from "./main.dev";
import { OnboardingProvider } from "./onboarding";
import PremiumFeatureProvider from "./premium-features-provider/premium-features-provider";
import { EditorProvider } from "./countdown-state-management/editor";

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
    <OnboardingProvider
      config={{
        productPublicWebsiteURL: "https://clockdown.lanzoninicola.com.br",
        commercerApiURL:
          "https://commerce.lanzoninicola.com.br/wp-json/commerce/v1",
        termsAndConditionsURL:
          "https://clockdown.lanzoninicola.com.br/terms-and-conditions",
        privacyPolicyURL:
          "https://clockdown.lanzoninicola.com.br/privacy-policy",
        maxFailureCount: 3,
      }}
    >
      <PremiumFeatureProvider
        config={{
          productPublicWebsiteURL: "https://clockdown.lanzoninicola.com.br",
        }}
      >
        <EditorProvider
          config={{
            productPublicWebsiteURL: "https://clockdown.lanzoninicola.com.br",
          }}
        >
          <App />
        </EditorProvider>
      </PremiumFeatureProvider>
    </OnboardingProvider>
  </ChakraProvider>
);

const withStrictMode = (children: JSX.Element) => (
  <React.StrictMode>
    <FakeWrapper show={false}>{children}</FakeWrapper>
  </React.StrictMode>
);
