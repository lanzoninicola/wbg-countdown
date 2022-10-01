import React from "react";
import CONFIG_INITIAL_STATE from "../../common/initial-states/config/initial-state";
import THEME_INITIAL_STATE from "../../common/initial-states/theme/initial-state";
import TIMER_INITIAL_STATE from "../../common/initial-states/timer/initial-state";
import { ConfigStateData } from "../../common/types/config";
import { ThemeStateData } from "../../common/types/theme";
import { ThemeTimerStateData } from "../../common/types/theme/timer";
import { TimerSettingsStateData } from "../../common/types/timer-settings";
import { TimerSettingsStateAction } from "../../editor/type/timer-settings-actions";
import { decrypt } from "../../utils/crypto";
import { WidgetContext } from "../context/widget-context";

interface WidgetProviderProps {
  children: React.ReactNode;
  timerSettings: string | TimerSettingsStateData;
  theme: string | ThemeStateData;
  config: string | ConfigStateData;
  isEditorMode: boolean;
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
  timerSettings,
  theme,
  config,
  isEditorMode,
}: WidgetProviderProps) {
  let timerSettingsState = {
    ...TIMER_INITIAL_STATE,
  };

  let themeState = {
    ...THEME_INITIAL_STATE,
  };

  let configState = {
    ...CONFIG_INITIAL_STATE,
  };

  if (timerSettings) {
    const inputTimerSettings = isEditorMode
      ? timerSettings
      : JSON.parse(decrypt(timerSettings as string));

    timerSettingsState = {
      ...timerSettingsState,
      ...inputTimerSettings,
    };
  }

  if (theme) {
    const inputTheme = isEditorMode
      ? theme
      : JSON.parse(decrypt(theme as string));

    themeState = {
      ...themeState,
      ...inputTheme,
    };
  }

  if (config) {
    const inputConfig = isEditorMode
      ? config
      : JSON.parse(decrypt(config as string));

    configState = {
      ...configState,
      ...inputConfig,
    };
  }

  const [timerSettingsStateData, timerSettingsDispatcher] = React.useReducer(
    (state: TimerSettingsStateData, action: any) => {
      switch (action.type) {
        case "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG":
          return {
            ...state,
            isTimerExpired: true,
          };
        default:
          return state;
      }
    },
    {
      ...timerSettingsState,
    }
  );

  return (
    <WidgetContext.Provider
      value={{
        timerSettings: timerSettingsStateData,
        timerSettingsDispatcher,
        theme: themeState,
        config: configState,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
}
