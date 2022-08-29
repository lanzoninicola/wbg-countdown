import usePremiumFeaturesContext from "./usePremiumFeaturesContext";

export default function useIsPremiumInstallation() {
  const { isPro, isAgency } = usePremiumFeaturesContext();

  return isPro || isAgency;
}
