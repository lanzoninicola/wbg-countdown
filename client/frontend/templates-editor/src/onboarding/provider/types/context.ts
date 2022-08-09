import { OnboardingFormAction, OnboardingFormState } from "./onboarding-form";

export type OnboardingContextData = OnboardingStateData & OnboardingStateSetter;

export interface OnboardingStateData {
  productId: string;
  installationId: string;
  status: "pending" | "completed";
  showOnboardingModal: boolean;
  formState: OnboardingFormState;
}

export interface OnboardingStateSetter {
  setStatus: (status: "pending" | "completed") => void;
  setShowOnboardingModal: (showOnboardingModal: boolean) => void;
  dispatchFormState: (action: OnboardingFormAction) => void;
}
