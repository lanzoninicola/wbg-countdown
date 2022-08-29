import { useReducer } from "react";
import { useConfig } from "../../config";
import getConfig from "../../config/hooks/getConfig";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingReducer } from "./reducers/onboarding-reducer";

interface OnboardingProviderProps {
  children: React.ReactNode;
}

export default function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const { product_id: productId, installation_id: installationId } =
    useConfig();
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
