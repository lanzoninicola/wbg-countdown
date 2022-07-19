import { HeaderAuth, RestApiActionConfig } from "countdown-rest-api/types";
import { CountdownModel } from "countdown-widget/types";
import { REST_API_URL } from "countdown-rest-api/constants";

export default function useCountdownsRestConfig<
  Auth extends string | number | symbol
>(headerAuth: HeaderAuth<Auth>) {
  const headers = {
    "Content-Type": "application/json",
    ...headerAuth,
  };

  const create: RestApiActionConfig<Auth> = {
    method: "POST",
    endpoint: () => `${REST_API_URL}countdowns`,
    headers,
  };
  const update: RestApiActionConfig<Auth> = {
    method: "PUT",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}countdowns/${id}`,
    headers,
  };
  const remove: RestApiActionConfig<Auth> = {
    method: "DELETE",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}countdowns/${id}`,
    headers,
  };
  const findAll: RestApiActionConfig<Auth> = {
    method: "GET",
    endpoint: () => `${REST_API_URL}countdowns`,
    headers,
  };
  const findById: RestApiActionConfig<Auth> = {
    method: "GET",
    endpoint: (id: CountdownModel["id"]) => `${REST_API_URL}countdowns/${id}`,
    headers,
  };

  return { create, update, remove, findAll, findById };
}
