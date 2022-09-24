import APP_INITIAL_STATE from "../../constants/app/initial-state";
import SETTINGS_INITIAL_STATE from "../../constants/settings/initial-state";
import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import { EditorContext } from "../../context/editor-context/editor-context";
import appReducer from "../../reducers/appReducer";
import settingsReducer from "../../reducers/settingsReducer";
import themeReducer from "../../reducers/themeReducer";
import { AppStateData } from "../../types/app";
import { AppStateAction } from "../../types/app/actions";
import { SettingsStateData } from "../../types/settings";
import { SettingsStateAction } from "../../types/settings/actions";
import { ThemeStateData } from "../../types/theme";
import { ThemeStateAction } from "../../types/theme/actions";
import useReducerLocalStorage from "../../utils/useReducerLocalStorage";

interface EditorProviderProps {
  children: React.ReactNode;
  config: {
    productPublicWebsiteURL: string;
  };
}

export default function EditorProvider({
  children,
  config,
}: EditorProviderProps) {
  const [appState, appDispatcher] = useReducerLocalStorage<
    AppStateData,
    AppStateAction
  >("__CLOCKODWN_APP_STATE__", appReducer, {
    ...APP_INITIAL_STATE,
    ...config,
  });

  const [settingsState, settingsDispatcher] = useReducerLocalStorage<
    SettingsStateData,
    SettingsStateAction
  >("__CLOCKODWN_SETTINGS_STATE__", settingsReducer, SETTINGS_INITIAL_STATE);

  const [themeState, themeDispatcher] = useReducerLocalStorage<
    ThemeStateData,
    ThemeStateAction
  >("__CLOCKODWN_THEME_STATE__", themeReducer, THEME_INITIAL_STATE);

  return (
    <EditorContext.Provider
      value={{
        app: appState,
        appDispatcher,
        settings: settingsState,
        settingsDispatcher,
        theme: themeState,
        themeDispatcher,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
