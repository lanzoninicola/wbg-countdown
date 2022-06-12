import { Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import CounterTitle from "./components/counter-title/counter-title";
import Counter from "./components/counter/counter";
import ExpiredNotice from "./components/expire-notice/expire-notice";
import useTimerSelector from "./context/hooks/useTimerSelector";

export default function CountdownTimer() {
  const { timerExpired } = useTimerSelector();

  return (
    <>
      {timerExpired ? (
        // TODO: this depends on the global settings how to deal with expired timers
        <ExpiredNotice />
      ) : (
        <VStack>
          <CounterTitle />
          <Counter
          // days={days}
          // hours={hours}
          // minutes={minutes}
          // seconds={seconds}
          />
        </VStack>
      )}
    </>
  );
}
