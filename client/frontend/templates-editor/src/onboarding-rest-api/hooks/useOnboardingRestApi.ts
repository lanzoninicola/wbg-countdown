import { client } from "../client/client";
import { APIResponse, OnboardingRequestPayload } from "../types";
import useOnboardingRestConfig from "./useOnboardingRestConfig";

export default function useOnboardingRestApi() {
  const { doOnboardingConfig } = useOnboardingRestConfig();

  const doOnboarding = async (
    payload: OnboardingRequestPayload
  ): Promise<APIResponse> => {
    return client(doOnboardingConfig.endpoint(), {
      method: "POST",
      data: payload,
      headers: doOnboardingConfig.headers,
    });
  };

  return { doOnboarding };
}
