import { getServerData } from "../../global/utils";

const { apiURL: REST_API_BASE_URL, wp_rest_nonce: WP_REST_NONCE } =
  getServerData();
const REST_API_NAMESPACE_AND_VERSION = "/commerce/v1";

const REST_API_URL = `${REST_API_BASE_URL}${REST_API_NAMESPACE_AND_VERSION}`;

export { REST_API_URL, WP_REST_NONCE };
