import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountdownWidgetProvider } from "./countdown-state-management/providers/index";

const env = process.env.NODE_ENV;

if (env === "development") {
  createWidgetNode();
}
const widgetNodes: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  '[data-role="clockdown-widget"]'
);
renderWithReact(widgetNodes);

function renderWithReact(nodes: NodeListOf<HTMLDivElement>) {
  // for each widget node attach create react app
  nodes.forEach((widgetNode) => {
    // get the widget id from the iframe attribute
    const settings = widgetNode.getAttribute("data-settings");
    const theme = widgetNode.getAttribute("data-theme");

    if (settings && theme) {
      ReactDOM.createRoot(widgetNode).render(
        <React.StrictMode>
          <CountdownWidgetProvider
            settings={settings}
            theme={theme}
            config={{
              productPublicWebsiteURL: "https://clockdown.lanzoninicola.com.br",
            }}
          >
            <App />
          </CountdownWidgetProvider>
        </React.StrictMode>
      );
    }
  });
}

function createWidgetNode() {
  const widgetNode = document.createElement("div");
  widgetNode.setAttribute("data-role", "clockdown-widget");
  widgetNode.setAttribute(
    "data-settings",
    "eyJ0YXJnZXREYXRlIjoiMjAyMi0xMC0yOVQyMzowMCIsInRhcmdldFRpbWV6b25lIjoiRXVyb3BlL0JlcmxpbiJ9"
  );
  widgetNode.setAttribute(
    "data-theme",
    "eyJsYXlvdXQiOnsiY29udGFpbmVyU2l6ZSI6eyJ3aWR0aCI6NTc4LCJoZWlnaHQiOjE2MH0sIm9yaWVudGF0aW9uIjoidmVydGljYWwiLCJnYXAiOjEsImZpdE9uU2NyZWVuIjpmYWxzZSwidHJhbnNwYXJlbnRCYWNrZ3JvdW5kIjpmYWxzZSwiYmFja2dyb3VuZENvbG9yIjoiI2ZmZmZmZiJ9LCJ0aW1lciI6eyJzaG93U2VwYXJhdG9yIjp0cnVlLCJzZXBhcmF0b3JDaGFyIjoiOiIsImhpZGVIb3VycyI6ZmFsc2UsImhpZGVTZWNvbmRzIjpmYWxzZSwicGFkV2l0aFplcm8iOmZhbHNlLCJ1bml0TnVtYmVyRm9udEZhbWlseSI6IkludGVyIiwidW5pdE51bWJlckZvbnRXZWlnaHQiOiI0MDAiLCJ1bml0TnVtYmVyRm9udFNpemUiOnsic20iOjE0LCJtZCI6MTYsImxnIjozMX0sInVuaXROdW1iZXJGb250Q29sb3IiOiIjMDAwMDAwIiwibGFzdFVuaXRDb2xvciI6IiNlMTBiMGIiLCJ1bml0TGFiZWxGb250RmFtaWx5IjoiSW50ZXIiLCJ1bml0TGFiZWxGb250V2VpZ2h0IjoiNDAwIiwidW5pdExhYmVsRm9udFNpemUiOnsic20iOjE2LCJtZCI6MzgsImxnIjozNX0sInVuaXRMYWJlbExhbmd1YWdlIjoiZW4tVVMiLCJ1bml0TGFiZWxGb250Q29sb3IiOiIjMDAwMDAwIn0sInRpdGxlIjp7InRleHQiOiJwaXBwbyIsImZvbnRGYW1pbHkiOiJJbnRlciIsImZvbnRXZWlnaHQiOiI0MDAiLCJmb250U2l6ZSI6eyJzbSI6MjUsIm1kIjoxNiwibGciOjI0fSwiZm9udENvbG9yIjoiIzAwMDAwMCJ9fQ=="
  );

  // append countdown widget wrapper to body
  const body = document.querySelector("body");
  body && body.appendChild(widgetNode);
}
