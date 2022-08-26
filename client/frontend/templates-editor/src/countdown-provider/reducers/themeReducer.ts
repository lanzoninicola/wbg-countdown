import { ThemeStateData } from "../types/theme";
import { ThemeStateAction } from "../types/theme/actions";

export default function themeReducer(
  state: ThemeStateData,
  action: ThemeStateAction
): ThemeStateData {
  switch (action.type) {
    case "THEME_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
