import { REST_API_URL } from "../constants";
import { WithEndpointEmptyParams, WithEndpointParamsId } from "../types";
import useOnboardingRestHeaders from "./useOnboardingRestHeaders";

export default function useOnboardingRestConfig() {
  const headers = useOnboardingRestHeaders();

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
