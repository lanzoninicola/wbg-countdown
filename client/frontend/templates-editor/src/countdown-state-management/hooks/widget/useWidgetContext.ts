import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { WidgetStateData } from "../../types/widget";

export default function useWidgetContext(): WidgetStateData {
  const settingsContext = useContextSelector(
    EditorContext,
    (ctx) => ctx?.widget
  );

  return {
    ...settingsContext,
  };
}
