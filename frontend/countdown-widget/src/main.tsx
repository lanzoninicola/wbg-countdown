import DCReact from "react";
import DCReactDOM from "react-dom/client";
import App from "./App";
import CountdownProvider from "./countdown-provider/countdown-provider";

const env = process.env.NODE_ENV;

if (env === "development") {
  const shortcodeID = "64";

  const shortcodeNode = document.createElement("div");
  shortcodeNode.classList.add("clockdown-shortcode");
  shortcodeNode.setAttribute("data-id", shortcodeID);

  // get body
  const body = document.querySelector("body");
  // append countdown shortcode wrapper to body
  body && body.appendChild(shortcodeNode);
}

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
    const element = document.querySelector(
      `.clockdown-shortcode[data-id="${id}"]`
    );

    if (id) {
      DCReactDOM.createRoot(element!).render(
        <DCReact.StrictMode>
          {/* <ChakraProvider> */}
          <CountdownProvider current={id} runtimeEnvironment="wordpress">
            <App current={id} />
          </CountdownProvider>
          {/* </ChakraProvider> */}
        </DCReact.StrictMode>
      );
    }
  });
});
