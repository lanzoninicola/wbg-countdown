export default function createDevRoot() {
  const clockdownNode = document.createElement("div");
  clockdownNode.id = "clockdown";
  const scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.textContent = `
    /* <![CDATA[ */var clockdownLocalized = {"apiURL":"http:\/\/localhost\/bb-melhor-envio\/wp-json","language":"pt_BR", "onboarding_status":"pending"};/* ]]&gt; */
  `;

  // get body
  const body = document.querySelector("body");
  // append countdown shortcode wrapper to body
  body && body.appendChild(clockdownNode);
  // append script to body
  body && body.appendChild(scriptNode);
}
