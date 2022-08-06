import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingContext() {
  const status = useContextSelector(OnboardingContext, (ctx) => ctx.status);

  const setStatus = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.setStatus
  );

  useEffect(() => {
    status === undefined &&
      console.error(
        "onboardingContext hook must be used within a OnboardingProvider"
      );
  }, [status]);

  return {
    status,
    setStatus,
  };
}
