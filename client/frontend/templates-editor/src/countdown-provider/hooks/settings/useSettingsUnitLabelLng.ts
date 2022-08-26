import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";

export default function useSettingsUnitLabelLng() {
  const labelLanguage = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.labelLanguage
  );

  const setUnitLabelLanguage = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.setUnitLabelLanguage
  );

  return {
    labelLanguage,
    setUnitLabelLanguage,
  };
}
