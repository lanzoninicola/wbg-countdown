import { AppStateData } from "./app";
import { AppStateAction } from "./app/actions";
import { SettingsStateData } from "./settings";
import { SettingsStateAction } from "./settings/actions";
import { ThemeStateData } from "./theme";
import { ThemeStateAction } from "./theme/actions";

export interface CountdownContextDataWithDispatch extends CountdownContextData {
  appDispatcher: React.Dispatch<AppStateAction>;
  settingsDispatcher: React.Dispatch<SettingsStateAction>;
  themeDispatcher: React.Dispatch<ThemeStateAction>;
}

/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export interface CountdownContextData {
  app: AppStateData;
  settings: SettingsStateData;
  theme: ThemeStateData;
}

export type CountdownSettingsAndTheme = SettingsStateData & ThemeStateData;

export type CountdownGlobalAction =
  | AppStateAction
  | SettingsStateAction
  | ThemeStateAction;

export type RuntimeEnvironment = "wordpress" | "other";
