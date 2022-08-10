import { OnboardingFormState } from "./context";

export interface OnboardingFormChangeAction {
  type: "ON_CHANGE_ONBOARDING_FORM";
  name: keyof OnboardingFormState;
  value: string | boolean;
}

export interface OnboardingFormSubmitAction {
  type: "SUBMIT_ONBOARDING_FORM";
}

export interface OnboardingFormSuccessAction {
  type: "SUCCESS_ONBOARDING_RESPONSE";
}

export interface OnboardingFormFailureAction {
  type: "FAILURE_ONBOARDING_RESPONSE";
  error: string;
}

export interface OnboardingStatusSuccessAction {
  type: "ONBOARDING_STATUS_RESPONSE_SUCCESS";
}

export interface OnboardingStatusFailedAction {
  type: "ONBOARDING_STATUS_RESPONSE_FAILED";
}

export type OnboardingAction =
  | OnboardingFormChangeAction
  | OnboardingFormSubmitAction
  | OnboardingFormSuccessAction
  | OnboardingFormFailureAction
  | OnboardingStatusSuccessAction
  | OnboardingStatusFailedAction;
