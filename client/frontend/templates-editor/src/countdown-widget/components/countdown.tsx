import { useLayoutEffect, useState } from "react";

import useAppContext from "../../countdown-provider/hooks/app/useAppContext";
import useSettingsContext from "../../countdown-provider/hooks/settings/useSettingsContext";
import useCountdown from "../hooks/useCountdown";
import CountdownWrapper from "./countdown-wrapper/countdown-wrapper";
import CountdownTitle from "./countdown-title/countdown-title";
import CountdownUnits from "./countdown-units/countdown-units";
import TimerSkeleton from "./timer-skeleton/timer-skeleton";
import useThemeTimerSelector from "../../countdown-provider/hooks/theme/useThemeTimerSelector";
import useThemeTimer from "../../countdown-provider/hooks/theme/useThemeTimer";

const Countdown = () => {
  const {
    targetDate: HTMLInputTargetDate,
    targetTimezone: HTMLInputTargetTimezone,
  } = useSettingsContext();

  const [isLoading, setIsLoading] = useState(true);
  const { timerExpired } = useAppContext();
  const { padWithZero } = useThemeTimer("unit-number");

  const { days, hours, minutes, seconds } = useCountdown({
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
    withZeros: padWithZero,
  });

  useLayoutEffect(() => {
    if (
      (timerExpired === false &&
        (days > 0 || hours > 0 || minutes > 0 || seconds > 0)) ||
      (timerExpired === true &&
        days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds === 0)
    ) {
      setIsLoading(false);
    }
  }, [timerExpired, days, hours, minutes, seconds]);

  if (isLoading) {
    return <TimerSkeleton />;
  }

  return (
    <CountdownWrapper>
      <CountdownTitle />
      <CountdownUnits
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </CountdownWrapper>
  );
};

export default Countdown;
