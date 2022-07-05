import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountdownProvider from "./countdown-provider/countdown-provider";

const env = process.env.NODE_ENV;

console.log(env);

/**
 *
 * END OF COUNTDOWN SHORTCODE RENDERING FROM THE SERVER
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  if (env === "development") {
    const shortcodeID = "64";

    const iFrameNode: HTMLIFrameElement = document.createElement("iframe");
    iFrameNode.setAttribute("data-role", "clockdown-iframe");
    iFrameNode.setAttribute("data-id", `${shortcodeID}`);

    document.body.appendChild(iFrameNode);
  }

  console.log(document.querySelectorAll("[data-emotion]"));

  const shortcodeIframes: NodeListOf<HTMLIFrameElement> =
    document.querySelectorAll('iframe[data-role="clockdown-iframe"]');

  // for each shortcode node attach create react app
  shortcodeIframes.forEach((shortcode) => {
    // get the shortcode id from the iframe attribute
    const shortcodeID = shortcode.getAttribute("data-id");

    // create the shortcode div node
    const d = shortcode.contentWindow?.document;
    if (!d) {
      return;
    }
    const shortcodeNode = d.createElement("div");
    shortcodeNode.setAttribute("data-role", "clockdown-shortcode");
    shortcodeID && shortcodeNode.setAttribute("data-id", shortcodeID);

    // append to the iframe body the shortcode node
    d.body.appendChild(shortcodeNode);

    if (shortcodeID) {
      ReactDOM.createRoot(shortcodeNode!).render(
        <React.StrictMode>
          <ChakraProvider>
            <CountdownProvider
              current={shortcodeID}
              runtimeEnvironment="wordpress"
            >
              <App current={shortcodeID} />
            </CountdownProvider>
          </ChakraProvider>
        </React.StrictMode>
      );
    }
  });
});
