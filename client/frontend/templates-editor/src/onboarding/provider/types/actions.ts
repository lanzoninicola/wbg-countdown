import { OnboardingFormState } from "./context";

export interface OnboardingFormChangeAction {
  type: "ONBOARDING_FORM_ON_CHANGE";
  name: keyof OnboardingFormState;
  value: string | boolean;
}

export interface OnboardingFormSubmitAction {
  type: "ONBOARDING_FORM_SUBMIT";
}

export interface OnboardingFormSuccessAction {
  type: "ONBOARDING_FORM_SUCCESS_RESPONSE";
}

export interface OnboardingFormFailureAction {
  type: "ONBOARDING_FORM_FAILURE_RESPONSE";
  error: string;
}

export interface OnboardingPreCheckStatusResponseFailedAction {
  type: "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_FAILED";
}

export interface OnboardingPreCheckStatusResponseSuccessAction {
  type: "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_SUCCESS";
}

export type OnboardingAction =
  | OnboardingFormChangeAction
  | OnboardingFormSubmitAction
  | OnboardingFormSuccessAction
  | OnboardingFormFailureAction
  | OnboardingPreCheckStatusResponseFailedAction
  | OnboardingPreCheckStatusResponseSuccessAction;
