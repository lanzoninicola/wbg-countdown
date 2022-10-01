import EDITOR_INITIAL_STATE from "../../constants/editor/initial-state";
import WIDGET_INITIAL_STATE from "../../constants/widget/initial-state";
import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import { EditorContext } from "../../context/editor-context/editor-context";
import editorReducer from "../../reducers/editorReducer";
import widgetReducer from "../../reducers/widgetReducer";
import themeReducer from "../../reducers/themeReducer";
import { EditorStateData } from "../../types/editor";
import { EditorStateAction } from "../../types/editor/actions";
import { WidgetStateData } from "../../types/widget";
import { WidgetStateAction } from "../../types/widget/actions";
import { ThemeStateData } from "../../types/theme";
import { ThemeStateAction } from "../../types/theme/actions";
import useReducerLocalStorage from "../../utils/useReducerLocalStorage";
import CONFIG_INITIAL_STATE from "../../constants/config/initial-state";
import configReducer from "../../reducers/configReducer";
import { ConfigStateData } from "../../types/config";
import { ConfigStateAction } from "../../types/config/actions";

interface EditorProviderProps {
  children: React.ReactNode;
  config: ConfigStateData;
}

export default function EditorProvider({
  children,
  config,
}: EditorProviderProps) {
  const [editorState, editorDispatcher] = useReducerLocalStorage<
    EditorStateData,
    EditorStateAction
  >("__CLOCKDOWN_EDITOR_STATE__", editorReducer, EDITOR_INITIAL_STATE);

  const [widgetState, widgetDispatcher] = useReducerLocalStorage<
    WidgetStateData,
    WidgetStateAction
  >("__CLOCKDOWN_WIDGET_STATE__", widgetReducer, WIDGET_INITIAL_STATE);

  const [themeState, themeDispatcher] = useReducerLocalStorage<
    ThemeStateData,
    ThemeStateAction
  >("__CLOCKODOWN_THEME_STATE__", themeReducer, THEME_INITIAL_STATE);

  const [configState, configDispatcher] = useReducerLocalStorage<
    ConfigStateData,
    ConfigStateAction
  >("__CLOCKDOWN_CONFIG_STATE__", configReducer, {
    ...CONFIG_INITIAL_STATE,
    ...config,
  });

  return (
    <EditorContext.Provider
      value={{
        editor: editorState,
        editorDispatcher,
        widget: widgetState,
        widgetDispatcher,
        theme: themeState,
        themeDispatcher,
        config: configState,
        configDispatcher,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
