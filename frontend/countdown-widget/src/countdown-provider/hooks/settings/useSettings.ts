import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { SettingsStateData } from "../../types/settings";

/**
 *
 * @returns {SettingsStateData} the settings state data
 */
export default function useSettings(): SettingsStateData {
  const settingsContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings
  );

  const { targetDate, targetTimezone, unitLabelLanguage } = settingsContext;

  return {
    targetDate,
    targetTimezone,
    unitLabelLanguage,
  };
}
