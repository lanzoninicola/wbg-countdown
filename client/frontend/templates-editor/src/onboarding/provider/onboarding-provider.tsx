import { useReducer } from "react";
import { getServerData } from "../../global/utils";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingReducer } from "./reducers/onboarding-reducer";

/** START: Info localized by Wordpress */
const { product_id: productId, installation_id: installationId } =
  getServerData();
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
