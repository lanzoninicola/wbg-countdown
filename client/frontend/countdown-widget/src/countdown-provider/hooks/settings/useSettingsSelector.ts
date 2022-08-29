import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { SettingsStateData } from "../../types/settings";
import { SettingsStateAction } from "../../types/settings/actions";

export type SettingsStateDataWithDispatcher = SettingsStateData & {
  settingsDispatcher: React.Dispatch<SettingsStateAction>;
};

export default function useSettingsSelector(): SettingsStateDataWithDispatcher {
  const settingsContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settings
  );

  const settingsDispatcher = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.settingsDispatcher
  );

  return {
    ...settingsContext,
    settingsDispatcher,
  };
}
