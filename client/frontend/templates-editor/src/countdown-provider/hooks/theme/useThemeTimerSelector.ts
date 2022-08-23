import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { ChakraToken } from "../../types/theme/responsive";
import {
  ThemeTimerContextData,
  ThemeTimerContextSetter,
  TimeUnits,
} from "../../types/theme/timer";

export type UseThemeTimerSelector = ThemeTimerContextData &
  ThemeTimerContextSetter;

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector(): UseThemeTimerSelector {
  const timer = useContextSelector(CountdownContext, (ctx) => ctx?.theme.timer);

  const setTimer = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.setTimer
  );

  const { digitFontSize, labelFontSize } = timer;

  function setUnitsVisible(unitsVisible: TimeUnits[]) {
    setTimer({ ...timer, unitsVisible });
  }

  function setShowSeparator(showSeparator: boolean) {
    setTimer({ ...timer, showSeparator });
  }

  function setSeparatorChar(separatorChar: string) {
    setTimer({ ...timer, separatorChar });
  }

  function setDigitFontFamily(digitFontFamily: string) {
    setTimer({ ...timer, digitFontFamily });
  }

  function setDigitFontWeight(digitFontWeight: string) {
    setTimer({ ...timer, digitFontWeight });
  }

  function setDigitFontSize(token: ChakraToken, size: number) {
    const nextState = { ...timer, digitFontSize };

    nextState.digitFontSize[token] = size;
    setTimer(nextState);
  }

  function setDigitFontColor(digitFontColor: string) {
    setTimer({ ...timer, digitFontColor });
  }

  function setLastUnitColor(lastUnitColor: string) {
    setTimer({ ...timer, lastUnitColor });
  }

  function setLabelFontFamily(labelFontFamily: string) {
    setTimer({ ...timer, labelFontFamily });
  }

  function setLabelFontWeight(labelFontWeight: string) {
    setTimer({ ...timer, labelFontWeight });
  }

  function setLabelFontSize(token: ChakraToken, size: number) {
    const nextState = { ...timer, labelFontSize };

    nextState.labelFontSize[token] = size;
    setTimer(nextState);
  }

  function setLabelFontColor(labelFontColor: string) {
    setTimer({ ...timer, labelFontColor });
  }

  return {
    ...timer,
    setUnitsVisible,
    setShowSeparator,
    setSeparatorChar,
    setDigitFontFamily,
    setDigitFontWeight,
    setDigitFontSize,
    setDigitFontColor,
    setLastUnitColor,
    setLabelFontFamily,
    setLabelFontWeight,
    setLabelFontSize,
    setLabelFontColor,
  };
}
