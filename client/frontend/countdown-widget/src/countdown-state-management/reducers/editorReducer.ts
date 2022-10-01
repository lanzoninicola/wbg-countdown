import { EditorStateData } from "../types/editor";
import { EditorStateAction } from "../types/editor/actions";

export default function editorReducer(
  state: EditorStateData,
  action: EditorStateAction
): EditorStateData {
  switch (action.type) {
    case "EDITOR_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE":
      return {
        ...state,
        currentToken: action.payload,
      };

    case "EDITOR_SET_CURRENT_COUNTDOWN":
      return {
        ...state,
        currentCountdown: action.payload,
      };

    case "EDITOR_ON_CHANGE_IS_EDITOR_MODE_FLAG":
      return {
        ...state,
        isEditorMode: action.payload,
      };

    case "EDITOR_ON_CHANGE_FONT_SIZE_UNIT_USED":
      return {
        ...state,
        fontSizeUnit: action.payload,
      };

    default:
      return state;
  }
}
