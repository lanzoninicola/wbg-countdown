import { client } from "../client/client";
import { APIResponse, OnboardingRequestPayload } from "../types";
import useOnboardingRestConfig from "./useOnboardingRestConfig";

interface ProductInstallationInfo {
  id: string /** The record id */;
  product_id: number /** The product id from the company product catalog */;
  installation_id: string /** The id generated when the product has been activated */;
  site_url: string;
  site_language: string;
  site_timezone: string;
  wp_user_id: number | null;
  created_at: string;
  updated_at: string;
}

export default function useOnboardingRestApi() {
  const { doOnboardingConfig, shouldOnboardingRequiredConfig } =
    useOnboardingRestConfig();

  const doOnboarding = async (
    payload: OnboardingRequestPayload
  ): Promise<APIResponse> => {
    return client(doOnboardingConfig.endpoint(), {
      method: "POST",
      data: payload,
      headers: doOnboardingConfig.headers,
    });
  };

  const shouldOnboardingRequired = async (
    installationId: string
  ): Promise<
    APIResponse<{ product_installation: ProductInstallationInfo }>
  > => {
    return client(shouldOnboardingRequiredConfig.endpoint(installationId), {
      method: "GET",
      headers: shouldOnboardingRequiredConfig.headers,
    });
  };

  return { doOnboarding, shouldOnboardingRequired };
}
