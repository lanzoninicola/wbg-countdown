const env = process.env.NODE_ENV;

console.log(import.meta.env.VITE_REST_API_BASE_ENDPOINT_URL);

const BASE_ENDPOINT_URL =
  env === "development"
    ? import.meta.env.VITE_REST_API_BASE_ENDPOINT_URL
    : // @ts-ignore
      // the clockdownLocalized variable is available only in Wordpress environment and not in dev mode on Vite
      `${clockdownLocalized.apiURL}/`;

const REST_API_VERSION = "clockdown/v1/";

const REST_API_URL = `${BASE_ENDPOINT_URL}${REST_API_VERSION}`;

export { REST_API_URL };
