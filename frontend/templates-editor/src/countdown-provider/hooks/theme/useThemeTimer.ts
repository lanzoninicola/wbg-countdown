import { ChackraUIResponsiveValuesWithUnit } from "../../types/theme/responsive";
import {
  ThemeDigitsContextData,
  ThemeUnitsShown,
  ThemeDigitsContextData,
  ThemeSeparatorContextData,
  ThemeTimerContextData,
} from "../../types/theme/timer";
import useThemeTimerSelector from "./useThemeTimerSelector";

export interface ThemeDigitsContextDataWithChackraUIFontSize
  extends ThemeDigitsContextData {
  digitFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit;
}

export interface ThemeDigitsContextDataWithChackraUIFontSize
  extends ThemeDigitsContextData {
  labelFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit;
}

type UseThemeTimer =
  | ThemeUnitsShown
  | ThemeSeparatorContextData
  | ThemeDigitsContextDataWithChackraUIFontSize
  | ThemeDigitsContextDataWithChackraUIFontSize
  | ThemeTimerContextData;

type ThemeTimerSlice =
  | "unitsShown"
  | "unit-separator"
  | "unit-digit"
  | "unit-label";

/**
 * Read-only hook to get the theme timer data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
function useThemeTimer(slice: "unitsShown"): ThemeUnitsShown;
function useThemeTimer(slice: "unit-separator"): ThemeSeparatorContextData;
function useThemeTimer(
  slice: "unit-digit"
): ThemeDigitsContextDataWithChackraUIFontSize;
function useThemeTimer(
  slice: "unit-label"
): ThemeDigitsContextDataWithChackraUIFontSize;
function useThemeTimer(slice: ThemeTimerSlice): UseThemeTimer {
  const {
    unitsShown,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontSizeChackraUI,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeChackraUI,
    labelFontColor,
  } = useThemeTimerSelector();

  if (slice === "unitsShown") {
    return { unitsShown };
  }

  if (slice === "unit-separator") {
    return {
      showSeparator,
      separatorChar,
    };
  }

  if (slice === "unit-digit") {
    return {
      digitFontFamily,
      digitFontWeight,
      digitFontSize,
      digitFontSizeChackraUI,
      digitFontColor,
      lastUnitColor,
    };
  }

  if (slice === "unit-label") {
    return {
      labelFontFamily,
      labelFontWeight,
      labelFontSize,
      labelFontSizeChackraUI,
      labelFontColor,
      lastUnitColor,
    };
  }

  return {
    unitsShown,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontSizeChackraUI,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeChackraUI,
    labelFontColor,
  };
}

export default useThemeTimer;
