import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountdownProvider from "./countdown-provider/countdown-provider";

/**
 *
 * END OF COUNTDOWN SHORTCODE RENDERING FROM THE SERVER
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  const shortcodes: NodeListOf<Element> = document.querySelectorAll(
    ".clockdown-shortcode"
  );

  // for each shortcode node attach create react app
  shortcodes.forEach((shortcode) => {
    const id = shortcode.getAttribute("data-id");

    if (id) {
      ReactDOM.createRoot(
        document.querySelector(`.clockdown-shortcode[data-id="${id}"]`)!
      ).render(
        <React.StrictMode>
          <ChakraProvider>
            <CountdownProvider current={id}>
              <App current={id} />
            </CountdownProvider>
          </ChakraProvider>
        </React.StrictMode>
      );
    }
  });
});
