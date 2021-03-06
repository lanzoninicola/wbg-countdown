import {
  CountdownModel,
  CountdownSettingsAndTheme,
  CountdownSettingsAndThemeModel,
} from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { APIResponse } from "../../types";

/**
 * Creates a new editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @param editorSettings - Editor settings
 * @returns APIResponse
 *
 * Response codes:
 * - "success": The record was successfully created.
 * - "error": An error occurred.
 * - "warning": The record already exists.
 *
 * No payload is returned.
 *
 */
const create = async (
  id: CountdownModel["id"],
  settings?: CountdownSettingsAndTheme
): Promise<
  APIResponse<{
    id: CountdownSettingsAndThemeModel["id"];
  }>
> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.create;

  const disabledNonce = process.env.NODE_ENV === "development" && true;
  const headers = {
    "Content-Type": "application/json",
    // @ts-ignore
    "X-WP-Nonce": clockdownLocalized.wp_rest_nonce,
  };

  if (disabledNonce) {
    delete headers["X-WP-Nonce"];
  }

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify({
        countdown_id: id,
        settings: settings ? JSON.stringify(settings) : null,
      }),
      headers,
    })
  ).json();
};

export default create;
