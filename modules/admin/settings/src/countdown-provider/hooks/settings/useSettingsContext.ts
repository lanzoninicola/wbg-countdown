import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { SettingsContext } from "../../types/settings";

export default function useSettingsContext(): SettingsContext {
  const settingsContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings
  );

  return {
    ...settingsContext,
  };
}
