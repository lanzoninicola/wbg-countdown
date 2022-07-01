import { useContextSelector } from "use-context-selector";
import SETTINGS_INITIAL_STATE from "../../constants/settings/initial-state";
import { CountdownContext } from "../../context/countdown-context";

export default function useSettingsContextReset() {
  const setTargetDate = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.setTargetDate
  );

  const setTargetTimezone = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.setTargetTimezone
  );

  const setUnitLabelLanguage = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings.setUnitLabelLanguage
  );

  const resetSettingsContext = () => {
    const { targetDate, targetTimezone, unitLabelLanguage } =
      SETTINGS_INITIAL_STATE;

    setTargetDate(targetDate);
    setTargetTimezone(targetTimezone);
    setUnitLabelLanguage(unitLabelLanguage);
  };

  return {
    resetSettingsContext,
  };
}
