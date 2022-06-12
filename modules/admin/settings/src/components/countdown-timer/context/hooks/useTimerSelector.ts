import { useContextSelector } from "use-context-selector";
import { CountdownTimerContext } from "../countdow-timer-context";

export default function useTimerSelector() {
  const targetDate = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.targetDate
  );

  const setTargetDate = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setTargetDate
  );

  const userTimezone = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.userTimezone
  );

  const setTargetTimezone = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setTargetTimezone
  );

  const timerExpired = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.timerExpired
  );

  const setTimerExpired = useContextSelector(
    CountdownTimerContext,
    (ctx) => ctx?.setTimerExpired
  );

  return {
    targetDate,
    setTargetDate,
    userTimezone,
    setTargetTimezone,
    timerExpired,
    setTimerExpired,
  };
}
