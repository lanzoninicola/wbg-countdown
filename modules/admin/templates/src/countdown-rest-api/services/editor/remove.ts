import { CountdownModel } from "../../../countdown-widget/types";
import { EDITOR_REST_API_ENDPOINTS } from "../../constants/editor/endpoints";
import { APIResponse } from "../../types";

/**
 * Removes the editor settings record for the given countdown id.
 * @param id - CountdownModel ID
 * @returns APIResponse
 *
 * Response codes:
 * - "success" if the record was removed
 * - "error" if the record was not removed
 * - "warning" if the record was not found
 *
 * No payload is returned.
 */
const remove = async (id: CountdownModel["id"]): Promise<APIResponse> => {
  const { endpoint, method } = EDITOR_REST_API_ENDPOINTS.delete;
  return await (
    await fetch(endpoint(id), {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export default remove;
