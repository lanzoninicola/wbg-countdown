import { WidgetStateData } from ".";

interface WidgetInitStateAction {
  type: "WIDGET_INIT_STATE";
  payload: WidgetStateData;
}

interface WidgetOnChangeTargetDateAction {
  type: "WIDGET_ON_CHANGE_TARGET_DATE";
  payload: string;
}

interface WidgetOnChangeTimezoneAction {
  type: "WIDGET_ON_CHANGE_TIMEZONE";
  payload: string;
}

interface WidgetOnChangeIsTimerExpiredFlagAction {
  type: "WIDGET_ON_CHANGE_IS_TIMER_EXPIRED_FLAG";
  payload: boolean;
}

export type WidgetStateAction =
  | WidgetInitStateAction
  | WidgetOnChangeTargetDateAction
  | WidgetOnChangeIsTimerExpiredFlagAction
  | WidgetOnChangeTimezoneAction;
