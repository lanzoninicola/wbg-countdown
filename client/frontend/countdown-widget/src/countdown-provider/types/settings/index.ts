import { Language } from "../../../countdown-widget-i18n/types";

export type SettingsContext = SettingsStateData & SettingsStateSetter;

/**
 *  This inteface describes the shape of data coming from the Editor (General Section)
 *  It's shared with the Editor component to maintain syncrhronized between them
 */
export interface SettingsStateData {
  /** The date in the future, it is used for the timer calculation */
  /** format: 'YYYY-MM-DDTHH:MM' */
  targetDate: string;
  /** The timezone to which the target date refers  */
  targetTimezone: string;
  /** The language of units labels */
  unitLabelLanguage: Language["locale"];
}

/**
 * This inteface describes the group of setters for the CountdownModel Settings
 */
export interface SettingsStateSetter {
  setTargetDate: (date: string) => void;
  setTargetTimezone: (timezone: string) => void;
  setUnitLabelLanguage: (language: Language["locale"]) => void;
}
