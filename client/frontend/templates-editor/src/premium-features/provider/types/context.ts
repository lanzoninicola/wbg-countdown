import { PremiumFeaturesAction } from "./actions";

export interface PremiumFeaturesStateData {
  isPremium: boolean;
}

export interface PremiumFeaturesStateSetter {
  dispatch: (action: PremiumFeaturesAction) => void;
}

export type PremiumFeaturesContextData = PremiumFeaturesStateData &
  PremiumFeaturesStateSetter;
