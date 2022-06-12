export interface CountdownTimerStateData {
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
  /** The date in the future, it is used for the timer calculation */
  /** format: 'YYYY-MM-DDTHH:MM' */
  targetDate: string;
  /** The timezone to which the target date refers  */
  userTimezone: string;
  /** The text used for the countdown title */
  titleText: string;
  /** The font family of the title text */
  titleFontFamily: string;
  /** The font size of the title text in pixel */
  titleFontSize: number;
  /** The font color of the title text */
  titleFontColor: string;
  /** The unit visible in the timer ['dd', 'hh', 'mm', 'ss'] */
  unitsShown: string[];
  /** The font family of the timer text */
  digitFontFamily: string;
  /** The font size of the timer text */
  digitFontSize: number;
  /** The font color of the timer text */
  digitFontColor: string;
  /** The font family of the last unit of timer text */
  lastDigitColor: string;
}

export interface CountdownTimerStateSetter {
  setTimerExpired: (timerExpired: boolean) => void;
  setTargetDate: (date: string) => void;
  setTargetTimezone: (timezone: string) => void;
  setTitleText: (text: string) => void;
  setTitleFontFamily: (fontFamily: string) => void;
  setTitleFontSize: (fontSize: number) => void;
  setTitleFontColor: (fontColor: string) => void;
  setUnitsShown: (units: string[]) => void;
  setDigitFontFamily: (fontFamily: string) => void;
  setDigitFontSize: (fontSize: number) => void;
  setDigitFontColor: (fontColor: string) => void;
  setLastDigitColor: (fontColor: string) => void;
}

export type CountdownTimerContextData = CountdownTimerStateData &
  CountdownTimerStateSetter;
