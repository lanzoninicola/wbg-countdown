import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { SettingsStateData } from "../../types/settings";
import { SettingsStateAction } from "../../types/settings/actions";

export type SettingsStateDataWithDispatcher = SettingsStateData & {
  settingsDispatcher: React.Dispatch<SettingsStateAction>;
};

export default function useSettingsSelector(): SettingsStateDataWithDispatcher {
  const settingsContext = useContextSelector(
    EditorContext,
    (ctx) => ctx?.settings
  );

  const settingsDispatcher = useContextSelector(
    EditorContext,
    (ctx) => ctx?.settingsDispatcher
  );

  return {
    ...settingsContext,
    settingsDispatcher,
  };
}
