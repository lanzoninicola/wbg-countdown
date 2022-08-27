import {
  ThemeUnitNumberContextData,
  ThemeUnitLabelContextData,
  ThemeSeparatorContextData,
  ThemeTimerContextData,
  ThemeUnitVisibilityContextData,
} from "../../types/theme/timer";
import useThemeTimerSelector from "./useThemeTimerSelector";

type UseThemeTimer =
  | ThemeUnitVisibilityContextData
  | ThemeSeparatorContextData
  | ThemeUnitNumberContextData
  | ThemeUnitLabelContextData
  | ThemeTimerContextData;

type ThemeTimerSlice =
  | "unit-visible"
  | "unit-separator"
  | "unit-number"
  | "unit-label";

/**
 * Read-only hook to get the theme timer data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
function useThemeTimer(slice: "unit-visible"): ThemeUnitVisibilityContextData;
function useThemeTimer(slice: "unit-separator"): ThemeSeparatorContextData;
function useThemeTimer(slice: "unit-number"): ThemeUnitNumberContextData;
function useThemeTimer(slice: "unit-label"): ThemeUnitLabelContextData;
function useThemeTimer(slice: ThemeTimerSlice): UseThemeTimer {
  const {
    hideHours,
    hideSeconds,
    padWithZero,
    showSeparator,
    separatorChar,
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitNumberFontSize,
    unitNumberFontColor,
    lastUnitColor,
    unitLabelFontFamily,
    unitLabelFontWeight,
    unitLabelFontSize,
    unitLabelFontColor,
    unitLabelLanguage,
  } = useThemeTimerSelector();

  if (slice === "unit-visible") {
    return { hideHours, hideSeconds };
  }

  if (slice === "unit-separator") {
    return {
      showSeparator,
      separatorChar,
    };
  }

  if (slice === "unit-number") {
    return {
      unitNumberFontFamily,
      unitNumberFontWeight,
      unitNumberFontSize,
      unitNumberFontColor,
      lastUnitColor,
      padWithZero,
    };
  }

  if (slice === "unit-label") {
    return {
      unitLabelFontFamily,
      unitLabelFontWeight,
      unitLabelFontSize,
      unitLabelFontColor,
      unitLabelLanguage,
      lastUnitColor,
    };
  }

  return {
    showSeparator,
    separatorChar,
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitNumberFontSize,
    unitNumberFontColor,
    lastUnitColor,
    unitLabelFontFamily,
    unitLabelFontWeight,
    unitLabelFontSize,
    unitLabelFontColor,
    unitLabelLanguage,
  };
}

export default useThemeTimer;
