import { CountdownModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { APIResponse } from "../../types";

const update = async (
  id: CountdownModel["id"],
  payload: Omit<CountdownModel, "id" | "created_at" | "updated_at">
): Promise<APIResponse> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.update;

  return await (
    await fetch(endpoint(id), {
      method: method,
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        // @ts-ignore
        "X-WP-Nonce": clockdownLocalized.wp_rest_nonce,
      },
    })
  ).json();
};

export default update;
