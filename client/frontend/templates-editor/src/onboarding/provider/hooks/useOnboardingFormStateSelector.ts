import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingFormStateSelector() {
  const formState = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.formState
  );

  const dispatchFormAction = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.dispatchFormAction
  );

  useEffect(() => {
    formState === undefined &&
      console.error(
        "useOnboardingFormStateSelector hook must be used within a OnboardingProvider"
      );
  }, [formState]);

  return {
    formState,
    dispatchFormAction,
  };
}
