import { OnboardingAction } from "./actions";

export type OnboardingContextData = OnboardingStateData & OnboardingStateSetter;

export interface OnboardingStateData {
  status: "pending" | "completed";
  formState: OnboardingFormState;
}

export interface OnboardingStateSetter {
  dispatch: (action: OnboardingAction) => void;
}

export interface OnboardingFormState {
  fullname: string;
  email: string;
  consent_newsletter: boolean;
  consent_privacy: boolean;
  consent_terms: boolean;
  isError: boolean;
  error: string;
  isLoading: boolean;
}
