import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chackra-ui/theme/theme";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("wbg-countdown");

  if (typeof element !== "undefined" && element !== null) {
    ReactDOM.render(
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>,
      document.getElementById("wbg-countdown")
    );
  }
});
