import { ReducerWithoutAction, useReducer, useState } from "react";
import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingFormReducer } from "./reducers/onboarding-form";
import { OnboardingFormState } from "./types";

interface OnboardingProviderProps {
  children: React.ReactNode;
  currentStatus: "pending" | "completed";
  productId: string;
  installationId: string;
}

export default function OnboardingProvider({
  children,
  currentStatus,
  productId,
  installationId,
}: OnboardingProviderProps) {
  const [status, setStatus] = useState<"pending" | "completed">(currentStatus);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  const [formState, dispatchFormState] = useReducer(
    onboardingFormReducer,
    INITIAL_STATE.formState
  );

  return (
    <OnboardingContext.Provider
      value={{
        productId,
        installationId,
        status,
        setStatus,
        showOnboardingModal,
        setShowOnboardingModal,
        formState,
        dispatchFormState,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
