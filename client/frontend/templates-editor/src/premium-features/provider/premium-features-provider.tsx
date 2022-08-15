import { useReducer } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { PremiumFeaturesContext } from "./context/premium-features-context";
import { premiumFeatureReducer } from "./reducers/premium-features-reducer";

interface OnboardingProviderProps {
  children: React.ReactNode;
}

export default function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const [state, dispatch] = useReducer(premiumFeatureReducer, {
    ...INITIAL_STATE,
  });

  return (
    <PremiumFeaturesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PremiumFeaturesContext.Provider>
  );
}
