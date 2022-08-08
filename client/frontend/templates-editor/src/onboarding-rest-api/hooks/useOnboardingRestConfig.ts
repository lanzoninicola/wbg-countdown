import { REST_API_URL } from "../constants";
import { OnboardingRequestPayload, RestApiActionConfig } from "../types";

export default function useOnboardingRestConfig<
  Auth extends string | number | symbol
>() {
  const headers = {
    "Content-Type": "application/json",
    // @ts-ignore
    "X-WP-Nonce": clockdownLocalized.wp_rest_nonce,
  };

  const doOnboardingConfig: RestApiActionConfig<unknown> = {
    method: "POST",
    endpoint: () => `${REST_API_URL}/onboarding`,
    headers,
  };

  return { doOnboardingConfig };
}
