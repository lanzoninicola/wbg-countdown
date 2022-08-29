import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { SettingsStateData } from "../../types/settings";

export default function useSettingsContext(): SettingsStateData {
  const settingsContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings
  );

  return {
    ...settingsContext,
  };
}
