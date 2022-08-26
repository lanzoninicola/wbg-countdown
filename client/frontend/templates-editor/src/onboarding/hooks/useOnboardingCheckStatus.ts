import { useEffect, useRef, useState } from "react";
import { useOnboardingRestApi } from "../../onboarding-rest-api";
import useOnboardingContext from "../provider/hooks/useOnboardingContext";

/**
 * Make call to external API to check if user is onboarded or not.
 *
 * @param installation_id The installation id of the product
 * @returns {string} status of the onboarding
 *
 * @dependencies useOnboardingRestApi() hook
 */
export default function useOnboardingCheckStatus() {
  const isOnboardingRequiredRef = useRef<boolean | null>(null);
  const { dispatch, installationId, onboardingStatus } = useOnboardingContext();
  const { shouldOnboardingRequired } = useOnboardingRestApi();

  useEffect(() => {
    if (isOnboardingRequiredRef.current !== null) {
      return;
    }

    async function shouldRequired() {
      const res = await shouldOnboardingRequired(installationId);

      if (res.data.status > 400) {
        dispatch({ type: "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_FAILED" });
        isOnboardingRequiredRef.current = true;
        return;
      }

      if (res.data.status === 200) {
        // TODO: move the following logic to server side
        if (res.data.payload?.product_installation?.wp_user_id === null) {
          dispatch({
            type: "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_FAILED",
          });
          isOnboardingRequiredRef.current = true;
          return;
        }

        dispatch({ type: "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_SUCCESS" });
        isOnboardingRequiredRef.current = false;
      }
    }

    shouldRequired();
  }, [installationId]);

  return onboardingStatus;
}
