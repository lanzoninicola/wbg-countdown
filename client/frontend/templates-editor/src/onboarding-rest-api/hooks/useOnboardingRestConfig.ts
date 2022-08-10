import { REST_API_URL } from "../constants";
import { WithEndpointEmptyParams, WithEndpointParamsId } from "../types";

export default function useOnboardingRestConfig() {
  const disabledNonce = process.env.NODE_ENV === "development" && true;
  const headers = {
    "Content-Type": "application/json",
    // @ts-ignore
    "X-WP-Nonce": clockdownLocalized.wp_rest_nonce,
  };

  if (disabledNonce) {
    delete headers["X-WP-Nonce"];
  }

  const doOnboardingConfig: WithEndpointEmptyParams = {
    method: "POST",
    endpoint: () => `${REST_API_URL}/onboarding`,
    headers,
  };

  const shouldOnboardingRequiredConfig: WithEndpointParamsId = {
    method: "GET",
    endpoint: (id: string) => `${REST_API_URL}/analytics/installations/${id}`,
    headers,
  };

  return { doOnboardingConfig, shouldOnboardingRequiredConfig };
}
