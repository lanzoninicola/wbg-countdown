import { OnboardingStateData, OnboardingAction } from "../types";

export const onboardingReducer = (
  state: OnboardingStateData,
  action: OnboardingAction
): OnboardingStateData => {
  switch (action.type) {
    case "ONBOARDING_FORM_ON_CHANGE":
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.name]: action.value,
        },
      };
    case "ONBOARDING_FORM_SUBMIT":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: true,
        },
      };
    case "ONBOARDING_FORM_SUCCESS_RESPONSE":
      return {
        ...state,
        onboardingStatus: "completed",
        onboardingResult: "success",
        formState: {
          ...state.formState,
          isLoading: false,
        },
      };
    case "ONBOARDING_FORM_FAILURE_RESPONSE":
      return {
        ...state,
        onboardingResult: "failed",
        formState: {
          ...state.formState,
          isLoading: false,
          isError: true,
          error: action.error,
        },
      };

    case "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_FAILED":
      return {
        ...state,
        onboardingStatus: "pending",
      };

    case "ONBOARDING_PRE_CHECK_STATUS_RESPONSE_SUCCESS":
      return {
        ...state,
        onboardingStatus: "completed",
      };

    default:
      return state;
  }
};
