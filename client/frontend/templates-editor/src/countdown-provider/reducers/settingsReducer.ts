import { SettingsStateData } from "../types/settings";
import { SettingsStateAction } from "../types/settings/actions";

export default function clockdownReducer(
  state: SettingsStateData,
  action: SettingsStateAction
): SettingsStateData {
  switch (action.type) {
    case "SETTINGS_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
