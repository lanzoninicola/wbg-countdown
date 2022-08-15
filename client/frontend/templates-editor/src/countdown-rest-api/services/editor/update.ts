import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../../countdown-widget/types";
import { WP_REST_NONCE } from "../../constants";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { APIResponse } from "../../types";

/**
 * Updates the editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "warning" if the record was not found
 * - "success" if the record was updated
 * - "error" if the record was not updated
 *
 * No payload is returned.
 */
const update = async (
  id: CountdownModel["id"],
  payload: CountdownSettingsAndTheme
): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.update;

  const disabledNonce = process.env.NODE_ENV === "development" && true;
  const headers = {
    "Content-Type": "application/json",
    "X-WP-Nonce": WP_REST_NONCE,
  };

  if (disabledNonce) {
    delete headers["X-WP-Nonce"];
  }

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify({
        countdown_id: id,
        settings: payload,
      }),
      headers,
    })
  ).json();
};

export default update;
