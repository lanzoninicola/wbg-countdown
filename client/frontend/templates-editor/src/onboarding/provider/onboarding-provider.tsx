import { useReducer, useState } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import useOnboardingCheckStatus from "../hooks/useOnboardingCheckStatus";
import { formReducer } from "./reducers/form-reducer";

/** START: Info localized by Wordpress */
// @ts-ignore
const productId = "1"; //clockdownLocalized.product_id;
// @ts-ignore
const installationId = "7cg9997b-0f40-11ed-9cce-040e3caabadb";
//clockdownLocalized.installation_id;
/** END: Info localized by Wordpress */

interface OnboardingProviderProps {
  children: React.ReactNode;
}

export default function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const status = useOnboardingCheckStatus({ installationId });
  const [isShownModal, setIsShownModal] = useState(false);

  const [formState, dispatchFormState] = useReducer(
    formReducer,
    INITIAL_STATE.formState
  );

  return (
    <OnboardingContext.Provider
      value={{
        productId,
        installationId,
        status,
        isShownModal,
        setIsShownModal,
        formState,
        dispatchFormState,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
