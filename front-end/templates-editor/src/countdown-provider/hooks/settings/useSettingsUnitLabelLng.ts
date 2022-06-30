import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";

export default function useSettingsUnitLabelLng() {
  const unitLabelLanguage = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.unitLabelLanguage
  );

  const setUnitLabelLanguage = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.setUnitLabelLanguage
  );

  return {
    unitLabelLanguage,
    setUnitLabelLanguage,
  };
}
