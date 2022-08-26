import { ThemeStateData } from ".";

interface ThemeInitStateAction {
  type: "THEME_INIT_STATE";
  payload: ThemeStateData;
}

export type ThemeStateAction = ThemeInitStateAction;
