import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingStatusSelector() {
  const onboardingStatus = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.onboardingStatus
  );

  useEffect(() => {
    onboardingStatus === undefined &&
      console.error(
        "useOnboardingStatusSelector hook must be used within a OnboardingProvider"
      );
  }, [onboardingStatus]);

  return {
    onboardingStatus,
  };
}
