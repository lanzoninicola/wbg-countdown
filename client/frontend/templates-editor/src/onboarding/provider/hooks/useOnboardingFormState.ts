import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingFormState() {
  const formState = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.formState
  );

  const dispatchFormState = useContextSelector(
    OnboardingContext,
    (ctx) => ctx.dispatchFormState
  );

  useEffect(() => {
    formState === undefined &&
      console.error(
        "useOnboardingFormState hook must be used within a OnboardingProvider"
      );
  }, [formState]);

  return {
    formState,
    dispatchFormState,
  };
}
