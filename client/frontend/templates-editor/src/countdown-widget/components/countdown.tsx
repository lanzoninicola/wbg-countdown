import { useLayoutEffect, useState } from "react";

import useEditorContext from "../../countdown-state-management/hooks/editor/useEditorContext";
import useWidgetContext from "../../countdown-state-management/hooks/widget/useWidgetContext";
import useCountdown from "../hooks/useCountdown";
import CountdownTitle from "./countdown-title/countdown-title";
import CountdownUnits from "./countdown-units/countdown-units";
import TimerSkeleton from "./timer-skeleton/timer-skeleton";
import useThemeTimer from "../../countdown-state-management/hooks/theme/useThemeTimer";

const Countdown = () => {
  const {
    targetDate: HTMLInputTargetDate,
    targetTimezone: HTMLInputTargetTimezone,
  } = useWidgetContext();

  const [isLoading, setIsLoading] = useState(true);
  const { isTimerExpired } = useWidgetContext();
  const { padWithZero } = useThemeTimer("unit-number");

  const { days, hours, minutes, seconds } = useCountdown({
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
    withZeros: padWithZero,
  });

  useLayoutEffect(() => {
    if (
      (isTimerExpired === false &&
        (days > 0 || hours > 0 || minutes > 0 || seconds > 0)) ||
      (isTimerExpired === true &&
        days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds === 0)
    ) {
      setIsLoading(false);
    }
  }, [isTimerExpired, days, hours, minutes, seconds]);

  if (isLoading) {
    return <TimerSkeleton />;
  }

  return (
    <div data-element="countdown-wrapper">
      <CountdownTitle />
      <CountdownUnits
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default Countdown;
