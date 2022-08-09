export default function createDevRoot() {
  const clockdownNode = document.createElement("div");
  clockdownNode.id = "clockdown";
  const scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.textContent = `
    /* <![CDATA[ */var clockdownLocalized = {"apiURL":"http:\/\/localhost\/bb-melhor-envio\/wp-json","language":"pt_BR", "onboarding_status":"pending", "product_id": "1", "installation_id": "7cg9997b-0f40-11ed-9cce-040e3caabadb"};/* ]]&gt; */
  `;

  // get body
  const body = document.querySelector("body");
  // append countdown shortcode wrapper to body
  body && body.appendChild(clockdownNode);
  // append script to body
  body && body.appendChild(scriptNode);
}
