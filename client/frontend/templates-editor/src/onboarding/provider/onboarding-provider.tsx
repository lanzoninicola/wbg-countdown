import { useReducer, useState } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingFormReducer } from "./reducers/onboarding-form-reducer";

/** START: Info localized by Wordpress */
// @ts-ignore
const productId = "1"; //clockdownLocalized.product_id;
// @ts-ignore
const installationId = "7cg9997b-0f40-11ed-9cce-040e3caabadb";
//clockdownLocalized.installation_id;
// @ts-ignore
const onboardingStatus = "pending"; //clockdownLocalized.onboarding_status;
/** END: Info localized by Wordpress */

interface OnboardingProviderProps {
  children: React.ReactNode;
}

export default function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const [status, setStatus] = useState<"pending" | "completed">(
    onboardingStatus
  );
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  const [formState, dispatchFormState] = useReducer(
    onboardingFormReducer,
    INITIAL_STATE.formState
  );

  return (
    <OnboardingContext.Provider
      value={{
        productId,
        installationId,
        status,
        setStatus,
        showOnboardingModal,
        setShowOnboardingModal,
        formState,
        dispatchFormState,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
