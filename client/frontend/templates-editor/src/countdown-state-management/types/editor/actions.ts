import { EditorStateData } from ".";
import { FontsizeUnit } from "../../../countdown-widget-typography/types";
import { CountdownModel } from "../../../countdown-widget/types";
import { ChakraToken } from "../theme/responsive";

interface EditorInitStateAction {
  type: "EDITOR_INIT_STATE";
  payload: EditorStateData;
}

interface EditorSetCurrentCountdownAction {
  type: "EDITOR_SET_CURRENT_COUNTDOWN";
  payload: CountdownModel["id"];
}

interface EditorOnChangeTokenLayoutResponsiveAction {
  type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE";
  payload: ChakraToken;
}

interface EditorOnChangeIsEditorModeFlagAction {
  type: "EDITOR_ON_CHANGE_IS_EDITOR_MODE_FLAG";
  payload: boolean;
}

interface EditorOnChangeFontSizeUnitUsedAction {
  type: "EDITOR_ON_CHANGE_FONT_SIZE_UNIT_USED";
  payload: FontsizeUnit;
}

export type EditorStateAction =
  | EditorInitStateAction
  | EditorSetCurrentCountdownAction
  | EditorOnChangeTokenLayoutResponsiveAction
  | EditorOnChangeIsEditorModeFlagAction
  | EditorOnChangeFontSizeUnitUsedAction;
