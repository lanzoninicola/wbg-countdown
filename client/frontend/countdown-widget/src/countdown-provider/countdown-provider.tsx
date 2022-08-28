import useReducerLocalStorage from "./utils/useReducerLocalStorage";
import APP_INITIAL_STATE from "./constants/app/initial-state";
import SETTINGS_INITIAL_STATE from "./constants/settings/initial-state";
import THEME_INITIAL_STATE from "./constants/theme/initial-state";
import { CountdownContext } from "./context/countdown-context";
import appReducer from "./reducers/appReducer";
import settingsReducer from "./reducers/settingsReducer";
import themeReducer from "./reducers/themeReducer";
import { CountdownSettingsAndTheme } from "./types";
import { AppStateData } from "./types/app";
import { AppStateAction } from "./types/app/actions";
import { SettingsStateData } from "./types/settings";
import { SettingsStateAction } from "./types/settings/actions";
import { ThemeStateData } from "./types/theme";
import { ThemeStateAction } from "./types/theme/actions";
import { decrypt } from "./utils/crypto";

interface CountdownProviderProps {
  children: React.ReactNode;
  settings?: string;
  theme?: string;
}

/**
 * This provides the state of the countdown widget that contains the following informations:
 *  1. the basic settings of the countdown widget (target date, timezone). Data are provided by calling the REST API.
 *  2. the current countdown value is provided in different ways depending on the context.:
 *
 *     *** WHEN WORKING WITH THE EDITOR ***
 *    - it is the countdown that is currently being edited.
 *    - it is updated when the user choose a countdown to edit from the list of countdowns.
 *
 *    *** WHEN WORKING WITH THE COUNTDOWN WIDGET ***
 *    - it is the countdown that is currently being displayed, isolated on the front-end pages.
 *    - it is provided by the [data-id] attribute when is rendered to the DOM when the user add the shortcode with the id attribute in the page.
 *
 * @param current  - the current countdown ID is currently being edited/displayed
 *
 * @returns
 */
export default function CountdownProvider({
  children,
  settings,
  theme,
}: CountdownProviderProps) {
  let settingsInitialState = {
    ...SETTINGS_INITIAL_STATE,
  };

  let themeInitialState = {
    ...THEME_INITIAL_STATE,
  };

  if (settings) {
    const settingsDecoded = decrypt(settings);
    settingsInitialState = {
      ...settingsInitialState,
      ...JSON.parse(settingsDecoded),
    };

    console.log({
      settingsEncrypt: settings,
      settingsDecrypt: settingsDecoded,
      settingsDecryptParse: JSON.parse(settingsDecoded),
    });
  }

  if (theme) {
    const themeDecoded = decrypt(theme);
    themeInitialState = {
      ...themeInitialState,
      ...JSON.parse(themeDecoded),
    };
  }

  const [appState, appDispatcher] = useReducerLocalStorage<
    AppStateData,
    AppStateAction
  >("__CLOCKODWN_APP_STATE__", appReducer, APP_INITIAL_STATE);

  const [settingsState, settingsDispatcher] = useReducerLocalStorage<
    SettingsStateData,
    SettingsStateAction
  >("__CLOCKODWN_SETTINGS_STATE__", settingsReducer, settingsInitialState);

  const [themeState, themeDispatcher] = useReducerLocalStorage<
    ThemeStateData,
    ThemeStateAction
  >("__CLOCKODWN_THEME_STATE__", themeReducer, themeInitialState);

  return (
    <CountdownContext.Provider
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
    </CountdownContext.Provider>
  );
}
