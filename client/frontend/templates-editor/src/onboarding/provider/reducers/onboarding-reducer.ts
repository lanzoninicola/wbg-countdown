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
        status: "completed",
        formState: {
          ...state.formState,
          isLoading: false,
        },
      };
    case "ONBOARDING_FORM_FAILURE_RESPONSE":
      return {
        ...state,
        formState: {
          ...state.formState,
          isLoading: false,
          isError: true,
          error: action.error,
        },
      };

    case "ONBOARDING_CHECK_STATUS_RESPONSE_IS_REQUIRED":
      return {
        ...state,
        status: "pending",
      };

    case "ONBOARDING_CHECK_STATUS_RESPONSE_IS_NOT_REQUIRED":
      return {
        ...state,
        status: "completed",
      };

    default:
      return state;
  }
};
