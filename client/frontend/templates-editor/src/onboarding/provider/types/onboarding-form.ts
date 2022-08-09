export interface OnboardingFormState {
  fullname: string;
  email: string;
  consent_newsletter: boolean;
  consent_privacy: boolean;
  consent_terms: boolean;
  isError: boolean;
  error: string;
  isLoading: boolean;
  isSubmitted: boolean;
}

export type dispatchFormState = (action: any) => void;

export interface OnboardingFormChangeAction {
  type: "CHANGE";
  name: keyof OnboardingFormState;
  value: string | boolean;
}

export interface OnboardingFormSubmitAction {
  type: "SUBMIT";
}

export interface OnboardingFormSuccessAction {
  type: "SUCCESS";
}

export interface OnboardingFormFailureAction {
  type: "FAILURE";
  error: string;
}

export type OnboardingFormAction =
  | OnboardingFormChangeAction
  | OnboardingFormSubmitAction
  | OnboardingFormSuccessAction
  | OnboardingFormFailureAction;
