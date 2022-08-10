import { OnboardingStateData } from "../types";

const INITIAL_STATE: OnboardingStateData = {
  productId: "",
  installationId: "",
  status: "pending",
  isShownModal: false,
  formState: {
    fullname: "",
    email: "",
    consent_newsletter: false,
    consent_privacy: false,
    consent_terms: false,
    isError: false,
    error: "",
    isLoading: false,
    isSubmitted: false,
  },
};

export default INITIAL_STATE;
