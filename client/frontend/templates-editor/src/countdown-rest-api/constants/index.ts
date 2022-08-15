import { getServerData } from "../../global/utils";

const { apiURL: REST_API_URL, wp_rest_nonce: WP_REST_NONCE } = getServerData();

export { REST_API_URL, WP_REST_NONCE };
