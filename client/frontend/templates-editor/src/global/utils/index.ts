/**
 * This returns the data passed from the server via script tag
 */
export function getServerData() {
  const env = process.env.NODE_ENV;

  if (env === "development" || env === "test") {
    return {
      api_url: "http://localhost/bb-melhor-envio/wp-json/clockdown/v1",
      language: "en",
      onboarding_status: "pending",
      product_id: "1",
      installation_id: "7cg9997b-0f40-11ed-9cce-040e3caabadb",
      commerce_api_url: "http://localhost/bb-melhor-envio/wp-json/commerce/v1",
      nonce: "8c768e9eba",
      wp_rest_nonce: "c586eb8fa5",
    };
  }

  // @ts-ignore
  return clockdownLocalized;
}
