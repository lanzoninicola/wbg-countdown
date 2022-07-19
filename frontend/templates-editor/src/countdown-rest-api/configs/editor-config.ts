import { HeaderAuth } from "countdown-rest-api/types";
import { CountdownModel } from "countdown-widget/types";

export default function editorRestApiConfig<
  Auth extends string | number | symbol
>(restApiURL: string, headerAuth: HeaderAuth<Auth>) {
  const headers = {
    "Content-Type": "application/json",
    ...headerAuth,
  };

  const config = {
    actions: {
      create: {
        method: "POST",
        endpoint: (id: CountdownModel["id"]) =>
          `${restApiURL}countdowns/${id}/settings`,
        headers,
      },
      update: {
        method: "PUT",
        endpoint: (id: CountdownModel["id"]) =>
          `${restApiURL}countdowns/${id}/settings`,
        headers,
      },
      delete: {
        method: "DELETE",
        endpoint: (id: CountdownModel["id"]) =>
          `${restApiURL}countdowns/${id}/settings`,
        headers,
      },
      findById: {
        method: "GET",
        endpoint: (id: CountdownModel["id"]) =>
          `${restApiURL}countdowns/${id}/settings`,
        headers,
      },
    },
  };

  return config;
}
