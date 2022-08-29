import { ThemeStateData } from ".";
import { Language } from "../../../countdown-widget-i18n/types";
import { CountdownLayoutOrientation, ElementSize } from "./layout";

interface ThemeInitStateAction {
  type: "THEME_INIT_STATE";
  payload: ThemeStateData;
}

/** START UNITS LABEL ACTIONS */
interface ThemeTimerOnChangeUnitLabelFontSizeAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTimerOnChangeUnitLabelFontFamilyAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelFontWeightAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_WEIGHT";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelFontColorAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_COLOR";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelLanguageAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_LANGUAGE";
  payload: Language["locale"];
}

/** END UNITS LABEL ACTIONS */

/** START UNITS NUMBER ACTIONS */

interface ThemeTimerOnChangeUnitNumberFontSizeAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTimerOnChangeUnitNumberFontFamilyAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY";
  payload: string;
}

interface ThemeTimerOnChangeUnitNumberFontWeightAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_WEIGHT";
  payload: string;
}

interface ThemeTimerOnChangeUnitNumberFontColorAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_COLOR";
  payload: string;
}

interface ThemeTimerOnChangeVisibilityDaysAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_DAYS";
  payload: boolean;
}

interface ThemeTimerOnChangeVisibilityHoursAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_HOURS";
  payload: boolean;
}

interface ThemeTimerOnChangeVisibilitySecondsAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_SECONDS";
  payload: boolean;
}

interface ThemeTimerOnChangePadWithZeroAction {
  type: "THEME_TIMER_ON_CHANGE_PAD_WITH_ZERO";
  payload: boolean;
}

/** END UNITS NUMBER ACTIONS */

/** START SEPARATOR ACTIONS */

interface ThemeTimerOnChangeShowSeparatorAction {
  type: "THEME_TIMER_ON_CHANGE_SHOW_SEPARATOR";
  payload: boolean;
}

interface ThemeTimerOnChangeSeparatorCharAction {
  type: "THEME_TIMER_ON_CHANGE_SEPARATOR_CHAR";
  payload: string;
}

/** END SEPARATOR ACTIONS */

/** START LAYOUT ACTIONS */

interface ThemeLayoutOnChangeContainerSizeAction {
  type: "THEME_LAYOUT_ON_CHANGE_CONTAINER_SIZE";
  payload: ElementSize;
}

interface ThemeLayoutOnChangeOrientationAction {
  type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION";
  payload: CountdownLayoutOrientation;
}

interface ThemeLayoutOnChangeGapAction {
  type: "THEME_LAYOUT_ON_CHANGE_GAP";
  payload: number;
}

interface ThemeLayoutOnChangeFitOnScreenAction {
  type: "THEME_LAYOUT_ON_CHANGE_FIT_ON_SCREEN";
  payload: boolean;
}

interface ThemeLayoutOnChangeBackgroundTransparentAction {
  type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT";
  payload: boolean;
}

interface ThemeLayoutOnChangeBackgroundColorAction {
  type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR";
  payload: string;
}

/** END LAYOUT ACTIONS */

/** START THEME TITLE ACTIONS */

interface ThemeTitleOnChangeTextAction {
  type: "THEME_TITLE_ON_CHANGE_TEXT";
  payload: string;
}

interface ThemeTitleOnChangeFontSizeAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTitleOnChangeFontFamilyAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY";
  payload: string;
}

interface ThemeTitleOnChangeFontWeightAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_WEIGHT";
  payload: string;
}

interface ThemeTitleOnChangeFontColorAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_COLOR";
  payload: string;
}

export type ThemeStateAction =
  | ThemeInitStateAction
  | ThemeTimerOnChangeUnitNumberFontSizeAction
  | ThemeTimerOnChangeUnitLabelFontSizeAction
  | ThemeTimerOnChangeUnitLabelFontFamilyAction
  | ThemeTimerOnChangeUnitLabelFontWeightAction
  | ThemeTimerOnChangeUnitLabelFontColorAction
  | ThemeTimerOnChangeUnitLabelLanguageAction
  | ThemeTimerOnChangeUnitNumberFontFamilyAction
  | ThemeTimerOnChangeUnitNumberFontWeightAction
  | ThemeTimerOnChangeUnitNumberFontColorAction
  | ThemeTimerOnChangeVisibilityDaysAction
  | ThemeTimerOnChangeVisibilityHoursAction
  | ThemeTimerOnChangeVisibilitySecondsAction
  | ThemeTimerOnChangePadWithZeroAction
  | ThemeTimerOnChangeShowSeparatorAction
  | ThemeTimerOnChangeSeparatorCharAction
  | ThemeLayoutOnChangeContainerSizeAction
  | ThemeLayoutOnChangeOrientationAction
  | ThemeLayoutOnChangeGapAction
  | ThemeLayoutOnChangeFitOnScreenAction
  | ThemeLayoutOnChangeBackgroundTransparentAction
  | ThemeLayoutOnChangeBackgroundColorAction
  | ThemeTitleOnChangeTextAction
  | ThemeTitleOnChangeFontSizeAction
  | ThemeTitleOnChangeFontFamilyAction
  | ThemeTitleOnChangeFontWeightAction
  | ThemeTitleOnChangeFontColorAction;
