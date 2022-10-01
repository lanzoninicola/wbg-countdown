import { useContextSelector } from "use-context-selector";

import { WidgetContext } from "../../context/widget-context/widget-context";
import { EditorContext } from "../../context/editor-context/editor-context";
import { ConfigStateData } from "../../types/config";

export default function useConfigContext(): ConfigStateData {
  const configFromEditorProvider = useContextSelector(
    EditorContext,
    (state) => state.config
  );

  const configFromWidgetProvider = useContextSelector(
    WidgetContext,
    (state) => state.config
  );

  return configFromEditorProvider || configFromWidgetProvider;
}
