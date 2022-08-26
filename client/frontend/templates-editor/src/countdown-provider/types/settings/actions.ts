import { SettingsStateData } from ".";

interface SettingsInitStateAction {
  type: "SETTINGS_INIT_STATE";
  payload: SettingsStateData;
}

export type SettingsStateAction = SettingsInitStateAction;
