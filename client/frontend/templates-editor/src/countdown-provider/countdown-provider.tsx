import useReducerLocalStorage from "../hooks/useReducerLocalStorage";
import APP_INITIAL_STATE from "./constants/app/initial-state";
import SETTINGS_INITIAL_STATE from "./constants/settings/initial-state";
import THEME_INITIAL_STATE from "./constants/theme/initial-state";
import { CountdownContext } from "./context/countdown-context";
import appReducer from "./reducers/appReducer";
import settingsReducer from "./reducers/settingsReducer";
import themeReducer from "./reducers/themeReducer";
import { CountdownSettingsAndTheme } from "./types";
import { AppStateData } from "./types/app";
import { SettingsStateData } from "./types/settings";
import { ThemeStateData } from "./types/theme";

interface CountdownProviderProps {
  children: React.ReactNode;
  settingsAndTheme: CountdownSettingsAndTheme | null;
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
  settingsAndTheme,
}: CountdownProviderProps) {
  let settingsInitialState = {
    ...SETTINGS_INITIAL_STATE,
  };

  let themeInitialState = {
    ...THEME_INITIAL_STATE,
  };

  if (settingsAndTheme) {
    const { layout, targetDate, targetTimezone, timer, title } =
      settingsAndTheme;

    settingsInitialState = {
      targetDate,
      targetTimezone,
      actionDispatched: "",
    };

    themeInitialState = {
      layout,
      timer,
      title,
      actionDispatched: "",
    };
  }

  const [appState, appDispatcher] = useReducerLocalStorage<AppStateData>(
    "__CLOCKODWN_APP_STATE__",
    appReducer,
    APP_INITIAL_STATE
  );

  const [settingsState, settingsDispatcher] =
    useReducerLocalStorage<SettingsStateData>(
      "__CLOCKODWN_SETTINGS_STATE__",
      settingsReducer,
      settingsInitialState
    );

  const [themeState, themeDispatcher] = useReducerLocalStorage<ThemeStateData>(
    "__CLOCKODWN_THEME_STATE__",
    themeReducer,
    themeInitialState
  );

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
