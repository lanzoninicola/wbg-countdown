import { OnboardingFormAction, OnboardingFormState } from "../types";

export const formReducer = (
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
        error: action.error,
        isSubmitted: true,
      };

    default:
      return state;
  }
};
