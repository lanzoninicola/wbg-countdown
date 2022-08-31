import { OnboardingAction } from "./actions";

export type OnboardingContextData = OnboardingStateData & OnboardingStateSetter;

export interface OnboardingStateData {
  /** The onboarding status. If "pending" the onboarding is required, if "completed" not */
  status: "pending" | "completed";
  /** The onboarding form state */
  formState: OnboardingFormState;
  /** Track if the onboarding modal is open but this is NOT CONTROL the state of modal. The modal state MUST be controlled by useDisclosure hook */
  isModalOpen: boolean;
  /** The last action dispatched */
  actionDispatched: string;
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
  /** When the form submission returns an error */
  isError: boolean;
  /** Track the error message */
  error: string;
  /** Tracking how many times the process fail. Upto 2 leave the user to continue using the software */
  failureCount: number;
  /** When the form submission is in progress */
  isLoading: boolean;
  /** Form submission completed */
  isSuccessful: boolean;
}
