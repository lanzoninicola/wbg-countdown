import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeTimerContextData } from "../../types/theme/timer";
import useThemeContext from "./useThemeContext";

export type ThemeTimerContextDataWithDispatcher = ThemeTimerContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector(): ThemeTimerContextDataWithDispatcher {
  const { timer, themeDispatcher } = useThemeContext();

  return {
    ...timer,
    themeDispatcher,
  };
}
