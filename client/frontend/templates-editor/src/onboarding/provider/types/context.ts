import { OnboardingFormAction, OnboardingFormState } from "./onboarding-form";

export type OnboardingContextData = OnboardingStateData & OnboardingStateSetter;

export interface OnboardingStateData {
  productId: string;
  installationId: string;
  status: "pending" | "completed";
  isShownModal: boolean;
  formState: OnboardingFormState;
}

export interface OnboardingStateSetter {
  setIsShownModal: (isShownModal: boolean) => void;
  dispatchFormState: (action: OnboardingFormAction) => void;
}
