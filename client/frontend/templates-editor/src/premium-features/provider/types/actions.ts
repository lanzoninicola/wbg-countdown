interface PremiumFeaturesCheckStatus {
  type: "PREMIUM_FEATURES_CHECK_STATUS";
}

interface PremiumFeaturesCheckStatusResponseSuccess {
  type: "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_SUCCESS";
}

interface PremiumFeaturesCheckStatusResponseFailed {
  type: "PREMIUM_FEATURES_CHECK_STATUS_RESPONSE_FAILED";
}

export type PremiumFeaturesAction =
  | PremiumFeaturesCheckStatus
  | PremiumFeaturesCheckStatusResponseSuccess
  | PremiumFeaturesCheckStatusResponseFailed;
