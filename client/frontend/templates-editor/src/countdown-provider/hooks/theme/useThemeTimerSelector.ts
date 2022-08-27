import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeTimerContextData } from "../../types/theme/timer";

export type ThemeTimerContextDataWithDispatcher = ThemeTimerContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector(): ThemeTimerContextDataWithDispatcher {
  const timer = useContextSelector(CountdownContext, (ctx) => ctx?.theme.timer);
  const themeDispatcher = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.themeDispatcher
  );

  return {
    ...timer,
    themeDispatcher,
  };
}
