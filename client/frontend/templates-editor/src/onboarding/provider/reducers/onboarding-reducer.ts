import { OnboardingStateData, OnboardingAction } from "../types";

export const onboardingReducer = (
  state: OnboardingStateData,
  action: OnboardingAction
): OnboardingStateData => {
  switch (action.type) {
    case "ON_CHANGE_ONBOARDING_FORM":
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.name]: action.value,
        },
      };
    case "SUBMIT_ONBOARDING_FORM":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: true,
        },
      };
    case "SUCCESS_ONBOARDING_RESPONSE":
      return {
        ...state,
        onboardingStatus: "completed",
        formState: {
          ...state.formState,
          isLoading: false,
        },
      };
    case "FAILURE_ONBOARDING_RESPONSE":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: false,
          isError: true,
          error: action.error,
        },
      };

    case "ONBOARDING_STATUS_RESPONSE_FAILED":
      return {
        ...state,
        onboardingStatus: "pending",
      };

    case "ONBOARDING_STATUS_RESPONSE_SUCCESS":
      return {
        ...state,
        onboardingStatus: "completed",
      };

    default:
      return state;
  }
};
