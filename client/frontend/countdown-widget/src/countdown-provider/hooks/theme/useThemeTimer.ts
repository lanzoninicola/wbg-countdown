import {
  ThemeDigitsContextData,
  ThemeDigitsLabelContextData,
  ThemeSeparatorContextData,
  ThemeTimerContextData,
  ThemeUnitsVisible,
} from "../../types/theme/timer";
import useThemeTimerSelector from "./useThemeTimerSelector";

type UseThemeTimer =
  | ThemeUnitsVisible
  | ThemeSeparatorContextData
  | ThemeDigitsContextData
  | ThemeDigitsLabelContextData
  | ThemeTimerContextData;

type ThemeTimerSlice =
  | "unitsVisible"
  | "unit-separator"
  | "unit-digit"
  | "unit-label";

/**
 * Read-only hook to get the theme timer data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
function useThemeTimer(slice: "unitsVisible"): ThemeUnitsVisible;
function useThemeTimer(slice: "unit-separator"): ThemeSeparatorContextData;
function useThemeTimer(slice: "unit-digit"): ThemeDigitsContextData;
function useThemeTimer(slice: "unit-label"): ThemeDigitsLabelContextData;
function useThemeTimer(slice: ThemeTimerSlice): UseThemeTimer {
  const {
    unitsVisible,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontColor,
  } = useThemeTimerSelector();

  if (slice === "unitsVisible") {
    return { unitsVisible };
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
      digitFontColor,
      lastUnitColor,
    };
  }

  if (slice === "unit-label") {
    return {
      labelFontFamily,
      labelFontWeight,
      labelFontSize,
      labelFontColor,
      lastUnitColor,
    };
  }

  return {
    unitsVisible,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontColor,
  };
}

export default useThemeTimer;
