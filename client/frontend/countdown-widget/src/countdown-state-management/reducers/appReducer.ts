import { AppStateData } from "../types/app";
import { AppStateAction } from "../types/app/actions";

export default function appReducer(
  state: AppStateData,
  action: AppStateAction
): AppStateData {
  switch (action.type) {
    case "APP_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "APP_EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE":
      return {
        ...state,
        currentToken: action.payload,
      };

    case "APP_SET_CURRENT_COUNTDOWN":
      return {
        ...state,
        currentCountdown: action.payload,
      };

    case "APP_ON_CHANGE_IS_EDITOR_MODE_FLAG":
      return {
        ...state,
        isEditorMode: action.payload,
      };

    case "APP_ON_CHANGE_IS_TIMER_EXPIRED_FLAG":
      return {
        ...state,
        timerExpired: action.payload,
      };

    case "APP_ON_CHANGE_FONT_SIZE_UNIT_USED":
      return {
        ...state,
        fontSizeUnit: action.payload,
      };

    default:
      return state;
  }
}
