import { useReducer } from "react";

import INITIAL_STATE from "./constants/initial-state";
import { OnboardingContext } from "./context/onboarding-context";
import { onboardingReducer } from "./reducers/onboarding-reducer";

const env = process.env.NODE_ENV;

/** START: Info localized by Wordpress */
// @ts-ignore
const cloc =
  env === "development"
    ? {
        product_id: "1",
        installation_id: "7cg9997b-0f40-11ed-9cce-040e3caabadb",
      }
    : // @ts-ignore
      clockdownLocalized;

const productId = cloc.product_id;
const installationId = cloc.installation_id;
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
