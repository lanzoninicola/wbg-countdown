import { OnboardingStateData } from "../types";

const INITIAL_STATE: OnboardingStateData = {
  productId: "",
  installationId: "",
  onboardingStatus: "pending",
  onboardingResult: null,
  formState: {
    fullname: "",
    email: "",
    consent_newsletter: false,
    consent_privacy: false,
    consent_terms: false,
    isError: false,
    error: "",
    isLoading: false,
  },
};

export default INITIAL_STATE;
