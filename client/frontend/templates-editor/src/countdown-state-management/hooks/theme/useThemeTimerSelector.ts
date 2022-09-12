import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeTimerContextData } from "../../types/theme/timer";

export type ThemeTimerContextDataWithDispatcher = ThemeTimerContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector(): ThemeTimerContextDataWithDispatcher {
  const timer = useContextSelector(EditorContext, (ctx) => ctx?.theme.timer);
  const themeDispatcher = useContextSelector(
    EditorContext,
    (ctx) => ctx?.themeDispatcher
  );

  return {
    ...timer,
    themeDispatcher,
  };
}
