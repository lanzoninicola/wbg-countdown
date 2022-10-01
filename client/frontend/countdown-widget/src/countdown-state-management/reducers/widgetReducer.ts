import { WidgetStateData } from "../types/widget";
import { WidgetStateAction } from "../types/widget/actions";

export default function widgetReducer(
  state: WidgetStateData,
  action: WidgetStateAction
): WidgetStateData {
  switch (action.type) {
    case "WIDGET_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "WIDGET_ON_CHANGE_TARGET_DATE":
      return {
        ...state,
        targetDate: action.payload,
        actionDispatched: action.type,
      };

    case "WIDGET_ON_CHANGE_TIMEZONE":
      return {
        ...state,
        targetTimezone: action.payload,
        actionDispatched: action.type,
      };

    case "WIDGET_ON_CHANGE_IS_TIMER_EXPIRED_FLAG":
      return {
        ...state,
        isTimerExpired: action.payload,
      };

    default:
      return state;
  }
}
