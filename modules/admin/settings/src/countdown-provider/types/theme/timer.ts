import { ResponsiveValue } from "./responsive";

export type ThemeTimerContextData = ThemeUnitsShown &
  ThemeSeparator &
  ThemeUnitDigit &
  ThemeUnitLabel;

export interface ThemeUnitsShown {
  /** The unit visible in the timer ['dd', 'hh', 'mm', 'ss'] */
  unitsShown: TimeUnits[];
}

export type SecondsUnit = "ss";
export type MinutesUnit = "mm";
export type HoursUnit = "hh";
export type DaysUnit = "dd";

export type TimeUnits = DaysUnit | HoursUnit | MinutesUnit | SecondsUnit;

export interface ThemeSeparator {
  /** Show the separator */
  showSeparator: boolean;
  /** The separator character */
  separatorChar: string;
}

export interface ThemeUnitDigit {
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

export interface ThemeUnitLabel {
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
