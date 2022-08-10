import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

/**
 * Returns the value stored in the onboarding context.
 *
 * @returns {string} status of the onboarding
 */
export default function useOnboardingStatusSelector() {
  const status = useContextSelector(OnboardingContext, (ctx) => ctx.status);

  const isShownModal = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.isShownModal
  );

  const setIsShownModal = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.setIsShownModal
  );

  useEffect(() => {
    status === undefined &&
      console.error(
        "useOnboardingStatusSelector hook must be used within a OnboardingProvider"
      );
  }, [status]);

  return {
    status,
    isShownModal,
    setIsShownModal,
  };
}
