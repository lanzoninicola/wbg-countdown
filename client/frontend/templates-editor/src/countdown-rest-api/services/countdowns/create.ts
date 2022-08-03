import { CountdownModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { APIResponse } from "../../types";

const create = async (
  countdown: Omit<CountdownModel, "id" | "created_at" | "updated_at">
): Promise<
  APIResponse<{
    id: CountdownModel["id"];
  }>
> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.create;

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
    await fetch(endpoint(), {
      method: method,
      body: JSON.stringify(countdown),
      headers,
    })
  ).json();
};

export default create;
