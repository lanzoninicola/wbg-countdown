import { OnboardingStateData } from "../types";

const INITIAL_STATE: OnboardingStateData = {
  productPublicWebsiteURL: "",
  commercerApiURL: "",
  status: "pending",
  formState: {
    fullname: "",
    email: "",
    consent_newsletter: false,
    consent_privacy: false,
    consent_terms: false,
    isError: false,
    error: "",
    failureCount: 0,
    isLoading: false,
    isSuccessful: false,
  },
  isModalOpen: false,
  actionDispatched: "",
};

export default INITIAL_STATE;
