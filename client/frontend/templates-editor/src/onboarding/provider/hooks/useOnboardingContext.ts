import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";
import { OnboardingContextData } from "../types";

export default function useOnboardingContext(): OnboardingContextData {
  const onboardingContext = useContextSelector(
    OnboardingContext,
    (state) => state
  );

  useEffect(() => {
    onboardingContext.onboardingStatus === undefined &&
      console.error(
        "onboardingContext hook must be used within a OnboardingProvider"
      );
  }, [onboardingContext.onboardingStatus]);

  return {
    ...onboardingContext,
  };
}
