import { useState } from "react";

import { CountdownModel } from "../countdown-widget/types";
import APP_INITIAL_STATE from "./constants/app/initial-state";
import SETTINGS_INITIAL_STATE from "./constants/settings/initial-state";
import THEME_INITIAL_STATE from "./constants/theme/initial-state";
import { CountdownContext } from "./context/countdown-context";

interface CountdownProviderProps {
  children: React.ReactNode;
  current?: CountdownModel["id"] | null;
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
  current,
}: CountdownProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<
    CountdownModel["id"] | null
  >(current || APP_INITIAL_STATE.currentCountdown);
  const [currentToken, setCurrentToken] = useState(
    APP_INITIAL_STATE.currentToken
  );
  const [isEditorMode, setIsEditorMode] = useState<boolean>(
    APP_INITIAL_STATE.isEditorMode
  );
  const [timerExpired, setTimerExpired] = useState(
    APP_INITIAL_STATE.timerExpired
  );
  const [targetDate, setTargetDate] = useState(
    SETTINGS_INITIAL_STATE.targetDate
  );

  const [targetTimezone, setTargetTimezone] = useState(
    SETTINGS_INITIAL_STATE.targetTimezone
  );
  const [unitLabelLanguage, setUnitLabelLanguage] = useState(
    SETTINGS_INITIAL_STATE.unitLabelLanguage
  );
  const [title, setTitle] = useState(THEME_INITIAL_STATE.title);
  const [timer, setTimer] = useState(THEME_INITIAL_STATE.timer);

  return (
    <CountdownContext.Provider
      value={{
        app: {
          currentCountdown,
          setCurrentCountdown,
          currentToken,
          setCurrentToken,
          isEditorMode,
          setIsEditorMode,
          timerExpired,
          setTimerExpired,
        },
        settings: {
          targetDate,
          setTargetDate,
          targetTimezone,
          setTargetTimezone,
          unitLabelLanguage,
          setUnitLabelLanguage,
        },
        theme: {
          title,
          setTitle,
          timer,
          setTimer,
        },
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
