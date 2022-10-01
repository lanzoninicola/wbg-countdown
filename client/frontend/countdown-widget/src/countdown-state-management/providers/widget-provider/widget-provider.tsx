import { useState } from "react";

import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import WIDGET_INITIAL_STATE from "../../constants/widget/initial-state";
import CONFIG_INITIAL_STATE from "../../constants/config/initial-state";
import { WidgetContext } from "../../context/widget-context/widget-context";
import { ThemeStateData } from "../../types/theme";
import { WidgetStateData } from "../../types/widget";
import { decrypt } from "../../utils/crypto";
import { ConfigStateData } from "../../types/config";

interface WidgetProviderProps {
  children: React.ReactNode;
  widget?: string;
  theme?: string;
  config: string;
}

/**
 * This provides the state of the countdown widget that contains the following informations:
 *  1. the basic widget of the countdown widget (target date, timezone). Data are provided by calling the REST API.
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
export default function WidgetProvider({
  children,
  widget,
  theme,
  config,
}: WidgetProviderProps) {
  let widgetInitialState = {
    ...WIDGET_INITIAL_STATE,
  };

  let themeInitialState = {
    ...THEME_INITIAL_STATE,
  };

  let configInitialState = {
    ...CONFIG_INITIAL_STATE,
  };

  if (widget) {
    const widgetDecoded = decrypt(widget);
    widgetInitialState = {
      ...widgetInitialState,
      ...JSON.parse(widgetDecoded),
    };
  }

  if (theme) {
    const themeDecoded = decrypt(theme);
    themeInitialState = {
      ...themeInitialState,
      ...JSON.parse(themeDecoded),
    };
  }

  if (config) {
    const configDecoded = decrypt(config);
    configInitialState = {
      ...configInitialState,
      ...JSON.parse(configDecoded),
    };
  }

  const [widgetState, setSettingsState] =
    useState<WidgetStateData>(widgetInitialState);

  const [themeState, setThemState] =
    useState<ThemeStateData>(themeInitialState);

  const [configState, setConfigState] =
    useState<ConfigStateData>(configInitialState);

  return (
    <WidgetContext.Provider
      value={{
        widget: widgetState,
        theme: themeState,
        config: configState,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}
