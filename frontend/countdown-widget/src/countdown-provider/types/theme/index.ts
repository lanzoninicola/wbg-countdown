import { ThemeGlobalContextData } from "./global";
import { ThemeTimerContextData } from "./timer";
import { ThemeTitleContextData } from "./title";

export type ThemeContext = ThemeStateData & ThemeStateSetter;

/**
 * This describes the shape of data coming from the Editor related to the theme customization.
 * This is used in the Editor component to maintain syncrhronized between them.
 */
export interface ThemeStateData {
  /** All style data that has not strictly relation with a specific element of the countdown */
  global: ThemeGlobalContextData;
  /** All the properties related to the customization of title */
  title: ThemeTitleContextData;
  /** All the properties related to the customization of timer */
  timer: ThemeTimerContextData;
}

/** This inteface is shared with the Editor */
export interface ThemeStateSetter {
  setGlobal: (data: ThemeGlobalContextData) => void;
  /** Set the title properties */
  setTitle: (title: ThemeTitleContextData) => void;
  /** Set the timer properties */
  setTimer: (timer: ThemeTimerContextData) => void;
}
