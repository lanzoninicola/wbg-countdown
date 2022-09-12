import useOnboardingContext from "../../onboarding/provider/hooks/useOnboardingContext";
import { WithEndpointEmptyParams, WithEndpointParamsId } from "../types";
import useOnboardingRestHeaders from "./useOnboardingRestHeaders";

export default function useOnboardingRestConfig() {
  const headers = useOnboardingRestHeaders();
  const { commercerApiURL } = useOnboardingContext();

  const doOnboardingConfig: WithEndpointEmptyParams = {
    method: "POST",
    endpoint: () => `${commercerApiURL}/onboarding`,
    headers,
  };

  const shouldOnboardingRequiredConfig: WithEndpointParamsId = {
    method: "GET",
    endpoint: (email: string) => `${commercerApiURL}/onboarding?email=${email}`,
    headers,
  };

  return { doOnboardingConfig, shouldOnboardingRequiredConfig };
}
