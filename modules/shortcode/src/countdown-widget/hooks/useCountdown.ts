import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useRef, useState } from "react";
import { RemainingTime } from "../types";
import {
  DEFAULT_REMAINING_TIME,
  diff,
  diffInSeconds,
} from "../utils/time-calculation";
import padWithZeros from "../utils/padWithZeros";
import useSettingsContextReset from "../../countdown-provider/hooks/settings/useSettingsContextReset";
import useSettingsContext from "../../countdown-provider/hooks/settings/useSettingsContext";
import useAppContext from "../../countdown-provider/hooks/app/useAppContext";

dayjs.extend(utc);
dayjs.extend(timezone);

// isExpired days + hours + minutes + seconds <= 0

interface UseCountdownProps {
  /** The target date from the (input type="datetime-local") editor*/
  HTMLInputTargetDate: string;
  /** the timezone of the target date */
  HTMLInputTargetTimezone: string;
  /** flag that indicates if need to add 0 to the digits. It depends on the editor settings */
  withZeros?: boolean;
}

/**
 * @param {string} HTMLInputTargetDate the target date/time in the desired timezone
 * @param {string} HTMLInputTargetTimezone the desired timezone
 * @param {boolean} withZeros flag that indicates if need to add 0 to the digits. It depends on the editor settings
 * @returns the difference between the target and the current date/time in time units (seconds, minutes, hours, days)
 */
export default function useCountdown({
  HTMLInputTargetDate,
  HTMLInputTargetTimezone,
  withZeros,
}: UseCountdownProps): RemainingTime {
  const intervalRef = useRef<number>();
  const { setTimerExpired } = useAppContext();
  const [remainingTime, setRemainingTime] = useState(DEFAULT_REMAINING_TIME);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
      shouldTimerExpired();
    }, 1000);

    intervalRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, [HTMLInputTargetDate, HTMLInputTargetTimezone]);

  function updateRemainingTime() {
    setRemainingTime(diff(todayLocalTime(), targetLocalTime()));
  }

  function shouldPadWithZeros(number: number, digits: number = 2) {
    return withZeros ? padWithZeros(number, digits) : number;
  }

  function shouldTimerExpired() {
    const seconds = diffInSeconds(todayLocalTime(), targetLocalTime());
    if (seconds <= 0) {
      clearInterval(intervalRef.current);
      setTimerExpired(true);
    }
  }

  /** convert the given target date/time (string format) from the given timezone to the final-user timezone **/
  function targetLocalTime(): dayjs.Dayjs {
    return dayjs.tz(HTMLInputTargetDate, HTMLInputTargetTimezone);
  }

  /* get the current date/time in the user timezone */
  function todayLocalTime(): dayjs.Dayjs {
    return dayjs();
  }

  return {
    days: shouldPadWithZeros(remainingTime.days),
    hours: shouldPadWithZeros(remainingTime.hours),
    minutes: shouldPadWithZeros(remainingTime.minutes),
    seconds: shouldPadWithZeros(remainingTime.seconds),
  };
}
