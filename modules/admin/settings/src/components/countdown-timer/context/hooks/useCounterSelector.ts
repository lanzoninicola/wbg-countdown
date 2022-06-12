import { useContextSelector } from "use-context-selector";
import { CountdownTimerContext } from "../countdow-timer-context";

export default function useCounterSelector() {
  const digitFontFamily = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.digitFontFamily
  );

  const setDigitFontFamily = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setDigitFontFamily
  );

  const digitFontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.digitFontSize
  );

  const setDigitFontSize = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setDigitFontSize
  );

  const digitFontColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.digitFontColor
  );

  const setDigitFontColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setDigitFontColor
  );

  const lastDigitColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.lastDigitColor
  );

  const setLastDigitColor = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setLastDigitColor
  );

  return {
    digitFontFamily,
    setDigitFontFamily,
    digitFontSize,
    setDigitFontSize,
    digitFontColor,
    setDigitFontColor,
    lastDigitColor,
    setLastDigitColor,
  };
}
