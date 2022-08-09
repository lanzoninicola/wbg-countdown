import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingStatus() {
  const status = useContextSelector(OnboardingContext, (ctx) => ctx.status);

  const showOnboardingModal = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.showOnboardingModal
  );

  const setStatus = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.setStatus
  );

  const setShowOnboardingModal = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.setShowOnboardingModal
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
    showOnboardingModal,
    setShowOnboardingModal,
  };
}
