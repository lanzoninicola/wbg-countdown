import { PremiumFeaturesAction } from "./actions";

export interface PremiumFeaturesStateData {
  isPremium: boolean;
  landingPageURL: string;
}

export interface PremiumFeaturesStateSetter {
  dispatch: (action: PremiumFeaturesAction) => void;
}

export type PremiumFeaturesContextData = PremiumFeaturesStateData &
  PremiumFeaturesStateSetter;
