import { useReducer, useState } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingReducer } from "./reducers/onboarding-reducer";

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
  const [state, dispatch] = useReducer(onboardingReducer, {
    ...INITIAL_STATE,
    installationId,
    productId,
  });

  return (
    <OnboardingContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
