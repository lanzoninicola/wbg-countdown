import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountdownProvider from "./countdown-provider/countdown-provider";

const env = process.env.NODE_ENV;

document.addEventListener("DOMContentLoaded", function () {
  if (env === "development") {
    const shortcodeID = "64";

    const shortcodeNode = document.createElement("div");
    shortcodeNode.setAttribute("data-role", "clockdown-shortcode");
    shortcodeNode.setAttribute("data-id", shortcodeID);

    // append countdown shortcode wrapper to body
    const body = document.querySelector("body");
    body && body.appendChild(shortcodeNode);
  }

  const shortcodeNodes: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    '[data-role="clockdown-shortcode"]'
  );

  // for each shortcode node attach create react app
  shortcodeNodes.forEach((shortcodeNode) => {
    // get the shortcode id from the iframe attribute
    const shortcodeID = shortcodeNode.getAttribute("data-id");

    if (shortcodeID) {
      ReactDOM.createRoot(shortcodeNode).render(
        <React.StrictMode>
          <CountdownProvider
            current={shortcodeID}
            runtimeEnvironment="wordpress"
          >
            <App current={shortcodeID} />
          </CountdownProvider>
        </React.StrictMode>
      );
    }
  });
});
