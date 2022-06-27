import { AppStateData, AppStateSetter } from "./app";
import { SettingsStateData, SettingsStateSetter } from "./settings";
import { ThemeStateData, ThemeStateSetter } from "./theme";

/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export interface CountdownContextData {
  app: AppStateData & AppStateSetter;
  settings: SettingsStateData & SettingsStateSetter;
  theme: ThemeStateData & ThemeStateSetter;
}
