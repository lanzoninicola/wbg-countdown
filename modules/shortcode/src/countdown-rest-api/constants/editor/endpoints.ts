import { REST_API_URL } from "..";
import { CountdownModel } from "../../../countdown-widget/types";

const EDITOR_REST_API_ENDPOINTS = {
  findById: {
    method: "GET",
    endpoint: (id: CountdownModel["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
  create: {
    method: "POST",
    endpoint: (id: CountdownModel["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
  update: {
    method: "PUT",
    endpoint: (id: CountdownModel["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
  delete: {
    method: "DELETE",
    endpoint: (id: CountdownModel["id"]) =>
      `${REST_API_URL}countdowns/${id}/countdown-settings`,
  },
};

export { REST_API_URL, EDITOR_REST_API_ENDPOINTS };
