import { CountdownModel } from "../../../countdown-widget/types";
import { WP_REST_NONCE } from "../../constants";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { APIResponse } from "../../types";

/**
 * Payload returns by the API might be:
 * - a string (successfully message) with status 200
 * - null (error occured on server) with status >=400
 */
const update = async (
  id: CountdownModel["id"],
  payload: Omit<CountdownModel, "id" | "created_at" | "updated_at">
): Promise<APIResponse<string | null>> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.update;

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
      body: JSON.stringify(payload),
      headers,
    })
  ).json();
};

export default update;
