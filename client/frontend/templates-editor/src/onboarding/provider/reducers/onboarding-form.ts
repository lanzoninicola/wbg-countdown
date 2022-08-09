import { OnboardingFormAction, OnboardingFormState } from "../types";

export const onboardingFormReducer = (
  state: OnboardingFormState,
  action: OnboardingFormAction
): OnboardingFormState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "SUBMIT":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
      };
    case "FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSubmitted: true,
      };

    default:
      return state;
  }
};
