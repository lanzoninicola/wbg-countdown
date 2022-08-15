import { REST_API_URL, WP_REST_NONCE } from "../constants";
import { WithEndpointEmptyParams, WithEndpointParamsId } from "../types";

export default function useOnboardingRestConfig() {
  const disabledNonce = process.env.NODE_ENV === "development" && true;
  const headers = {
    "Content-Type": "application/json",
    "X-WP-Nonce": WP_REST_NONCE,
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
