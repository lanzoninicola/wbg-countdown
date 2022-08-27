import { AppStateData } from ".";
import { FontsizeUnit } from "../../../countdown-widget-typography/types";
import { CountdownModel } from "../../../countdown-widget/types";
import { ChakraToken } from "../theme/responsive";

interface AppInitStateAction {
  type: "APP_INIT_STATE";
  payload: AppStateData;
}

interface AppSetCurrentCountdownAction {
  type: "APP_SET_CURRENT_COUNTDOWN";
  payload: CountdownModel["id"];
}

interface AppEditorOnChangeTokenLayoutResponsiveAction {
  type: "APP_EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE";
  payload: ChakraToken;
}

interface AppOnChangeIsEditorModeFlagAction {
  type: "APP_ON_CHANGE_IS_EDITOR_MODE_FLAG";
  payload: boolean;
}

interface AppOnChangeIsTimerExpiredFlagAction {
  type: "APP_ON_CHANGE_IS_TIMER_EXPIRED_FLAG";
  payload: boolean;
}

interface AppOnChangeFontSizeUnitUsedAction {
  type: "APP_ON_CHANGE_FONT_SIZE_UNIT_USED";
  payload: FontsizeUnit;
}

export type AppStateAction =
  | AppInitStateAction
  | AppSetCurrentCountdownAction
  | AppEditorOnChangeTokenLayoutResponsiveAction
  | AppOnChangeIsEditorModeFlagAction
  | AppOnChangeIsTimerExpiredFlagAction
  | AppOnChangeFontSizeUnitUsedAction;
