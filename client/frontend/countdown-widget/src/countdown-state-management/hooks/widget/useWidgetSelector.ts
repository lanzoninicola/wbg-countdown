import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { WidgetStateData } from "../../types/widget";
import { WidgetStateAction } from "../../types/widget/actions";

export type WidgetStateDataWithDispatcher = WidgetStateData & {
  widgetDispatcher: React.Dispatch<WidgetStateAction>;
};

export default function useWidgetSelector(): WidgetStateDataWithDispatcher {
  const settingsContext = useContextSelector(
    EditorContext,
    (ctx) => ctx?.widget
  );

  const widgetDispatcher = useContextSelector(
    EditorContext,
    (ctx) => ctx?.widgetDispatcher
  );

  return {
    ...settingsContext,
    widgetDispatcher,
  };
}
