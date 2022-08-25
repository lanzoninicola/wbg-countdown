import { CountdownModel } from "../../../countdown-widget/types";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../constants/countdowns/endpoints";
import { useRestHeaders } from "../../hooks";
import { APIResponse } from "../../types";

const create = async (
  countdown: Omit<CountdownModel, "id" | "created_at" | "updated_at">
): Promise<APIResponse<CountdownModel["id"]>> => {
  const { endpoint, method } = COUNTDOWNS_REST_API_ENDPOINTS.create;
  const headers = useRestHeaders();

  return await (
    await fetch(endpoint(), {
      method: method,
      body: JSON.stringify(countdown),
      headers,
    })
  ).json();
};

export default create;
