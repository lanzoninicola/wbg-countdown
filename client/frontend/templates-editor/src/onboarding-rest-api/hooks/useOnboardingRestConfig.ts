import { REST_API_URL } from "../constants";
import { RestApiActionConfig } from "../types";

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

  const doOnboardingConfig: RestApiActionConfig = {
    method: "POST",
    endpoint: () => `${REST_API_URL}/onboarding`,
    headers,
  };

  return { doOnboardingConfig };
}
