import dayjs from "dayjs";
import { useEffect, useState } from "react";
import useTimerSelector from "../context/hooks/useTimerSelector";

import isTimerExpired from "../utils/isTimerExpired";
import { now, nowMs, toMs } from "../utils/time";

//https://bobbyhadz.com/blog/javascript-initialize-date-with-timezone#:~:text=Use%20the%20toLocaleString()%20method,according%20to%20the%20provided%20values.&text=Copied!

interface UseCountdownServiceOptions {
  /** Option: change the interval step of setInterval, default: 1000 */
  timeStep?: number;
}

type Milliseconds = number;

/**
 * Used inside the useCountdownService hook
 *
 * I put the variable 'interval' externally because the useCountdownService hook
 * is used inside the Counter hook, every time the hook is recreated
 * and lost the reference to the interval.
 *
 * Need investigation if there is a better way to handle this.
 */
let interval: number = 0;

export default function useCountdownService(
  options: UseCountdownServiceOptions = { timeStep: 1000 }
) {
  const { targetDate, setTimerExpired } = useTimerSelector();
  const targetDateDayjs: dayjs.Dayjs = dayjs(targetDate);
  const targetDateMs: Milliseconds = toMs(targetDateDayjs);
  const todayMs: Milliseconds = nowMs();
  const [countDown, setCountDown] = useState<Milliseconds>(
    targetDateMs - todayMs
  );

  const [days, hours, minutes, seconds] = getReturnValues(
    now(),
    targetDateDayjs
  );

  useEffect(() => {
    interval = setInterval(() => {
      updateRemainingTime();
    }, options.timeStep);

    console.log(interval, countDown);

    // This effect is executed only once because of the dependency on tdInMilliseconds and the component never disassembles.
    // Here I still delete the interval to make sure it is not executed again.
    return () => clearInterval(interval);
  }, [targetDate]);

  function updateRemainingTime() {
    setCountDown(targetDateMs - todayMs);
  }

  // useEffect(() => {
  //   if (isTimerExpired(days, hours, minutes, seconds)) {
  //     clearInterval(interval);
  //     setTimerExpired(true);
  //   }
  // }, [days, hours, minutes, seconds]);

  return [days, hours, minutes, seconds];
}

function getReturnValues(nowDayjs: dayjs.Dayjs, targetDateDayjs: dayjs.Dayjs) {
  // calculate time left
  const days = getRemainingDays(nowDayjs, targetDateDayjs);
  const hours = getRemainingHours(nowDayjs, targetDateDayjs);
  const minutes = getRemainingMinutes(nowDayjs, targetDateDayjs);
  const seconds = getRemainingSeconds(nowDayjs, targetDateDayjs);

  return [days, hours, minutes, seconds];
}

function getRemainingSeconds(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "seconds") % 60;
}

function getRemainingMinutes(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "minutes") % 60;
}

function getRemainingHours(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "hours") % 24;
}

function getRemainingDays(
  nowDayjs: dayjs.Dayjs,
  targetDateDayjs: dayjs.Dayjs
): number {
  return targetDateDayjs.diff(nowDayjs, "days");
}

// function getReturnValues(countDown: any) {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [days, hours, minutes, seconds];
// }
