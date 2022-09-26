import { useState } from "react";
import APP_INITIAL_STATE from "../../constants/app/initial-state";
import SETTINGS_INITIAL_STATE from "../../constants/settings/initial-state";
import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import { CountdownWidgetContext } from "../../context/countdown-widget-context/countdown-widget-context";
import { AppStateData } from "../../types/app";
import { SettingsStateData } from "../../types/settings";
import { ThemeStateData } from "../../types/theme";
import { decrypt } from "../../utils/crypto";

interface CountdownWidgetProviderProps {
  children: React.ReactNode;
  settings?: string;
  theme?: string;
  app?: string;
  config: {
    productPublicWebsiteURL: string;
  };
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
export default function CountdownWidgetProvider({
  children,
  settings,
  theme,
  app,
  config,
}: CountdownWidgetProviderProps) {
  let settingsInitialState = {
    ...SETTINGS_INITIAL_STATE,
  };

  let themeInitialState = {
    ...THEME_INITIAL_STATE,
  };

  let appInitialState = {
    ...APP_INITIAL_STATE,
  };

  if (settings) {
    const settingsDecoded = decrypt(settings);
    settingsInitialState = {
      ...settingsInitialState,
      ...JSON.parse(settingsDecoded),
    };
  }

  if (theme) {
    const themeDecoded = decrypt(theme);
    themeInitialState = {
      ...themeInitialState,
      ...JSON.parse(themeDecoded),
    };
  }

  if (app) {
    const appDecoded = decrypt(app);
    appInitialState = {
      ...appInitialState,
      ...JSON.parse(appDecoded),
    };
  }

  const [appState, appDispatcher] = useState<AppStateData>({
    ...APP_INITIAL_STATE,
    ...config,
    ...appInitialState,
  });

  const [settingsState, setSettingsState] =
    useState<SettingsStateData>(settingsInitialState);

  const [themeState, setThemState] =
    useState<ThemeStateData>(themeInitialState);

  return (
    <CountdownWidgetContext.Provider
      value={{
        app: appState,
        settings: settingsState,
        theme: themeState,
      }}
    >
      {children}
    </CountdownWidgetContext.Provider>
  );
}
