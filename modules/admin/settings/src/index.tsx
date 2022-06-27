import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import CountdownProvider from "./countdown-provider/countdown-provider";

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("wbg-countdown");

  if (typeof element !== "undefined" && element !== null) {
    ReactDOM.createRoot(document.getElementById("wbg-countdown")!).render(
      <ChakraProvider theme={theme}>
        <CountdownProvider>
          <App />
        </CountdownProvider>
      </ChakraProvider>
    );
  }
});
