import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import useReducerLocalStorage from "./hooks/useReducerLocalStorage";
import { onboardingReducer } from "./reducers/onboarding-reducer";
import { OnboardingAction, OnboardingStateData } from "./types";

interface OnboardingProviderProps {
  children: React.ReactNode;
  config: {
    productPublicWebsiteURL: string;
    commercerApiURL: string;
  };
}

export default function OnboardingProvider({
  children,
  config,
}: OnboardingProviderProps) {
  const [state, dispatch] = useReducerLocalStorage<
    OnboardingStateData,
    OnboardingAction
  >("__CLOCKDOWN_ONBOARDING_STATE__", onboardingReducer, {
    ...INITIAL_STATE,
    ...config,
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
