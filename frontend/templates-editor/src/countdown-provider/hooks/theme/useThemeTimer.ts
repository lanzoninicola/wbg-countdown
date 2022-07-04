import { ChackraUIResponsiveValuesWithUnit } from "../../types/theme/responsive";
import {
  ThemeDigitsContextData,
  ThemeUnitsShown,
  ThemeSeparatorContextData,
  ThemeTimerContextData,
  ThemeDigitsLabelContextData,
} from "../../types/theme/timer";

import useThemeTimerSelector from "./useThemeTimerSelector";

export interface ThemeDigitsContextDataWithChackra
  extends ThemeDigitsContextData {
  digitFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit;
}

export interface ThemeDigitsLabelContextDataWithChackra
  extends ThemeDigitsLabelContextData {
  labelFontSizeChackraUI: ChackraUIResponsiveValuesWithUnit;
}

type UseThemeTimer =
  | ThemeUnitsShown
  | ThemeSeparatorContextData
  | ThemeDigitsContextDataWithChackra
  | ThemeDigitsLabelContextDataWithChackra
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
function useThemeTimer(slice: "unit-digit"): ThemeDigitsContextDataWithChackra;
function useThemeTimer(slice: "unit-label"): ThemeDigitsContextDataWithChackra;
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
