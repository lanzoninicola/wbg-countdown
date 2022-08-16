import { useContextSelector } from "use-context-selector";
import { PremiumFeaturesContext } from "../context/premium-features-context";

export default function usePremiumFeaturesLandingURLSelector() {
  const landingPageURL = useContextSelector(
    PremiumFeaturesContext,
    (ctx) => ctx.landingPageURL
  );

  return landingPageURL;
}
