import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountdownProvider from "./countdown-provider/countdown-provider";

const env = process.env.NODE_ENV;

/**
 *
 * END OF COUNTDOWN SHORTCODE RENDERING FROM THE SERVER
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  // const iFrameNode: HTMLIFrameElement = document.createElement("iframe");
  // iFrameNode.setAttribute("data-role", "clockdown-iframe");

  // get body
  // const body = document.querySelector("body");
  // body && body.appendChild(iFrameNode);

  if (env === "development") {
    const shortcodeID = "64";

    const shortcodeNode = document.createElement("div");
    shortcodeNode.classList.add("clockdown-shortcode");
    shortcodeNode.setAttribute("data-id", shortcodeID);

    // append countdown shortcode wrapper to body
    const body = document.querySelector("body");
    body && body.appendChild(shortcodeNode);
  }

  // const shortcodes: NodeListOf<Element> = document.querySelectorAll(
  //   ".clockdown-shortcode"
  // );

  const shortcodeIframes: NodeListOf<HTMLIFrameElement> =
    document.querySelectorAll('iframe[data-role="clockdown-iframe"]');

  // for each shortcode node attach create react app
  shortcodeIframes.forEach((shortcode) => {
    // get the shortcode id from the iframe attribute
    const shortcodeID = shortcode.getAttribute("data-id");

    console.log("shortcodeID", shortcodeID);

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

    console.log("shortcodeNode", d);

    // const id = shortcode.getAttribute("data-id");
    // const element = document.querySelector(
    //   `.clockdown-shortcode[data-id="${id}"]`
    // );

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
