import { SettingsStateData } from "../types/settings";
import { SettingsStateAction } from "../types/settings/actions";

export default function settingsReducer(
  state: SettingsStateData,
  action: SettingsStateAction
): SettingsStateData {
  switch (action.type) {
    case "SETTINGS_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "SETTINGS_ON_CHANGE_TARGET_DATE":
      return {
        ...state,
        targetDate: action.payload,
        actionDispatched: action.type,
      };

    case "SETTINGS_ON_CHANGE_TIMEZONE":
      return {
        ...state,
        targetTimezone: action.payload,
        actionDispatched: action.type,
      };

    default:
      return state;
  }
}
