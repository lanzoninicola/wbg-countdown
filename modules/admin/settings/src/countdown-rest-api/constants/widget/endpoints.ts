import { REST_API_URL } from "..";
import { CountdownModel } from "../../../countdown-widget/types";

const WIDGET_REST_API_ENDPOINTS = {
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
};

export { REST_API_URL, WIDGET_REST_API_ENDPOINTS };
