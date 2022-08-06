export type OnboardingContextData = OnboardingStateData & OnboardingStateSetter;

export interface OnboardingStateData {
  status: "pending" | "completed";
}

export interface OnboardingStateSetter {
  setStatus: (status: "pending" | "completed") => void;
}
