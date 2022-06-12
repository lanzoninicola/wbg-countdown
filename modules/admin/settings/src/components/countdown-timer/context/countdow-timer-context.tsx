import { useState } from "react";
import { createContext } from "use-context-selector";
import { CountdownTimerContextData, CountdownTimerStateData } from "./types";

const initialState: CountdownTimerStateData = {
  timerExpired: false,
  targetDate: "2022-12-16T01:00",
  userTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
  titleText: "Countdown to New Year",
  titleFontFamily: "Inter",
  titleFontSize: 24,
  titleFontColor: "#000000",
  unitsShown: ["dd", "hh", "mm", "ss"],
  digitFontFamily: "Inter",
  digitFontSize: 48,
  digitFontColor: "#000000",
  lastDigitColor: "#e10b0b",
};

export const CountdownTimerContext = createContext<CountdownTimerContextData>(
  {} as CountdownTimerContextData
);

interface CountdownTimerContextProps {
  children: React.ReactNode;
}

export function CountdownTimerProvider({
  children,
}: CountdownTimerContextProps) {
  const [timerExpired, setTimerExpired] = useState(initialState.timerExpired);
  const [targetDate, setTargetDate] = useState(initialState.targetDate);
  const [userTimezone, setTargetTimezone] = useState(initialState.userTimezone);
  const [titleText, setTitleText] = useState(initialState.titleText);
  const [titleFontFamily, setTitleFontFamily] = useState(
    initialState.titleFontFamily
  );

  const [titleFontSize, setTitleFontSize] = useState(
    initialState.titleFontSize
  );
  const [titleFontColor, setTitleFontColor] = useState(
    initialState.titleFontColor
  );

  const [unitsShown, setUnitsShown] = useState(initialState.unitsShown);

  const [digitFontFamily, setDigitFontFamily] = useState(
    initialState.digitFontFamily
  );

  const [digitFontSize, setDigitFontSize] = useState(
    initialState.digitFontSize
  );

  const [digitFontColor, setDigitFontColor] = useState(
    initialState.digitFontColor
  );

  const [lastDigitColor, setLastDigitColor] = useState(
    initialState.lastDigitColor
  );

  return (
    <CountdownTimerContext.Provider
      value={{
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        userTimezone,
        setTargetTimezone,
        titleText,
        setTitleText,
        titleFontFamily,
        setTitleFontFamily,
        titleFontSize,
        setTitleFontSize,
        titleFontColor,
        setTitleFontColor,
        unitsShown,
        setUnitsShown,
        digitFontFamily,
        setDigitFontFamily,
        digitFontSize,
        setDigitFontSize,
        digitFontColor,
        setDigitFontColor,
        lastDigitColor,
        setLastDigitColor,
      }}
    >
      {children}
    </CountdownTimerContext.Provider>
  );
}
