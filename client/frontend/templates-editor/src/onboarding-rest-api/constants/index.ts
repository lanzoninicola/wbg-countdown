import { getConfig } from "../../config";

const { commerce_api_url: REST_API_URL, wp_rest_nonce: WP_REST_NONCE } =
  getConfig();

export { REST_API_URL, WP_REST_NONCE };
