import { SettingsStateData } from ".";

interface SettingsInitStateAction {
  type: "SETTINGS_INIT_STATE";
  payload: SettingsStateData;
}

interface SettingsOnChangeTargetDateAction {
  type: "SETTINGS_ON_CHANGE_TARGET_DATE";
  payload: string;
}

interface SettingsOnChangeTimezoneAction {
  type: "SETTINGS_ON_CHANGE_TIMEZONE";
  payload: string;
}

export type SettingsStateAction =
  | SettingsInitStateAction
  | SettingsOnChangeTargetDateAction
  | SettingsOnChangeTimezoneAction;
