import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { SettingsStateData } from "../../types/settings";

export default function useSettingsContext(): SettingsStateData {
  const settingsContext = useContextSelector(
    EditorContext,
    (ctx) => ctx?.settings
  );

  return {
    ...settingsContext,
  };
}
