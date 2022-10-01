import { ConfigStateData } from "./config";
import { ConfigStateAction } from "./config/actions";
import { EditorStateData } from "./editor";
import { EditorStateAction } from "./editor/actions";
import { ThemeStateData } from "./theme";
import { ThemeStateAction } from "./theme/actions";
import { WidgetStateData } from "./widget";
import { WidgetStateAction } from "./widget/actions";

export interface EditorContextDataWithDispatch extends EditorContextData {
  editorDispatcher: React.Dispatch<EditorStateAction>;
  widgetDispatcher: React.Dispatch<WidgetStateAction>;
  themeDispatcher: React.Dispatch<ThemeStateAction>;
  configDispatcher: React.Dispatch<ConfigStateAction>;
}

export interface WidgetContextData {
  widget: WidgetStateData;
  theme: ThemeStateData;
  config: ConfigStateData;
}

/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export interface EditorContextData {
  editor: EditorStateData;
  widget: WidgetStateData;
  theme: ThemeStateData;
  config: ConfigStateData;
}

export type CountdownSettingsAndTheme = WidgetStateData & ThemeStateData;

export type CountdownGlobalAction =
  | EditorStateAction
  | WidgetStateAction
  | ThemeStateAction
  | ConfigStateAction;

export type RuntimeEnvironment = "wordpress" | "other";
