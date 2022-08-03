import { ChakraToken, ResponsiveValue } from "./responsive";

export type ThemeTimerContextData = ThemeUnitsShownContextData &
  ThemeSeparatorContextData &
  ThemeDigitsContextData &
  ThemeDigitsLabelContextData;

export type ThemeTimerContextSetter = ThemeUnitsShownContextSetter &
  ThemeSeparatorContextSetter &
  ThemeDigitsContextSetter &
  ThemeDigitsLabelContextSetter;

export interface ThemeSeparatorContextData {
  /** Show the separator */
  showSeparator: boolean;
  /** The separator character */
  separatorChar: string;
}

export interface ThemeSeparatorContextSetter {
  setShowSeparator: (showSeparator: boolean) => void;
  setSeparatorChar: (separatorChar: string) => void;
}

export interface ThemeDigitsContextData {
  /** The font family of the digit text */
  digitFontFamily: string;
  /** The font weight of the digit text */
  digitFontWeight: string;
  /** The font size of the digit text */
  digitFontSize: ResponsiveValue;
  /** The font color of the digit text */
  digitFontColor: string;
  /** The color of the last unit of timer text */
  lastUnitColor: string;
}

export interface ThemeDigitsContextSetter {
  setDigitFontFamily: (digitFontFamily: string) => void;
  setDigitFontWeight: (digitFontWeight: string) => void;
  setDigitFontSize: (token: ChakraToken, digitFontSize: number) => void;
  setDigitFontColor: (digitFontColor: string) => void;
  setLastUnitColor: (lastUnitColor: string) => void;
}

export interface ThemeDigitsLabelContextData {
  /** The font family of the digit label */
  labelFontFamily: string;
  /** The font weight of the digit label */
  labelFontWeight: string;
  /** The font size of the digit label */
  labelFontSize: ResponsiveValue;
  /** The font color of the digit label */
  labelFontColor: string;
  /** The color of the last unit of timer text */
  lastUnitColor: string;
}

export interface ThemeDigitsLabelContextSetter {
  setLabelFontFamily: (labelFontFamily: string) => void;
  setLabelFontWeight: (labelFontWeight: string) => void;
  setLabelFontSize: (token: ChakraToken, labelFontSize: number) => void;
  setLabelFontColor: (labelFontColor: string) => void;
  setLastUnitColor: (lastUnitColor: string) => void;
}

export interface ThemeUnitsShownContextData {
  /** The unit visible in the timer ['dd', 'hh', 'mm', 'ss'] */
  unitsShown: TimeUnits[];
}

export interface ThemeUnitsShownContextSetter {
  setUnitsShown: (unitsShown: TimeUnits[]) => void;
}

export type SecondsUnit = "ss";
export type MinutesUnit = "mm";
export type HoursUnit = "hh";
export type DaysUnit = "dd";

export type TimeUnits = DaysUnit | HoursUnit | MinutesUnit | SecondsUnit;
