import { useContextSelector } from "use-context-selector";
import { withUnit } from "../../../countdown-widget-typography/countdown-widget-typography";
import { CountdownContext } from "../../context/countdown-context";

import { ChackraUIResponsiveValuesWithUnit } from "../../types/theme/responsive";
import { TimeUnits } from "../../types/theme/timer";
import useCurrentTokenSelector from "../app/useCurrentTokenSelector";

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useThemeTimerSelector() {
  const { currentToken } = useCurrentTokenSelector();
  const timer = useContextSelector(CountdownContext, (ctx) => ctx?.theme.timer);

  const setTimer = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.setTimer
  );

  const {
    digitFontColor,
    digitFontFamily,
    digitFontSize,
    digitFontWeight,
    labelFontColor,
    labelFontFamily,
    labelFontSize,
    labelFontWeight,
    lastUnitColor,
    separatorChar,
    showSeparator,
    unitsShown,
  } = timer;

  const digitFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit =
    Object.values(digitFontSize);

  const labelFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit =
    Object.values(labelFontSize);

  function setUnitsShown(unitsShown: TimeUnits[]) {
    setTimer({ ...timer, unitsShown });
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

  function setDigitFontSize(size: number) {
    const nextState = { ...timer, digitFontSize };

    nextState.digitFontSize[currentToken] = withUnit(size);
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

  function setLabelFontSize(size: number) {
    const nextState = { ...timer, labelFontSize };

    nextState.labelFontSize[currentToken] = withUnit(size);
    setTimer(nextState);
  }

  function setLabelFontColor(labelFontColor: string) {
    setTimer({ ...timer, labelFontColor });
  }

  return {
    unitsShown,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontSizeChackraUI,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeChackraUI,
    labelFontColor,
    setUnitsShown,
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
