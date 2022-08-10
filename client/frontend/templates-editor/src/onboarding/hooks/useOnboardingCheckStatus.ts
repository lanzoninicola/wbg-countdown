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
  const isRequiredRef = useRef<boolean | null>(null);
  const [status, setStatus] = useState<"pending" | "completed">("pending");
  const { dispatch, installationId } = useOnboardingContext();
  const { shouldOnboardingRequired } = useOnboardingRestApi();

  useEffect(() => {
    if (isRequiredRef.current !== null) {
      return;
    }

    async function shouldRequired() {
      const res = await shouldOnboardingRequired(installationId);

      if (res.data.status > 400) {
        setStatus("pending");
        dispatch({ type: "ONBOARDING_STATUS_RESPONSE_FAILED" });
        isRequiredRef.current = true;
        return;
      }

      if (res.data.status === 200) {
        if (res.data.payload?.product_installation?.wp_user_id === null) {
          setStatus("pending");
          dispatch({
            type: "ONBOARDING_STATUS_RESPONSE_FAILED",
          });
          isRequiredRef.current = true;
          return;
        }

        setStatus("completed");
        dispatch({ type: "ONBOARDING_STATUS_RESPONSE_SUCCESS" });
        isRequiredRef.current = false;
      }
    }

    shouldRequired();
  }, [installationId]);

  return status;
}
