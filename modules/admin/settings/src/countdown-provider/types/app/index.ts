import { Tokens } from "../theme/responsive";
import { CountdownModel } from "../../../countdown-widget/types";

export type AppContext = AppStateData & AppStateSetter;

/**
 * This is the shape of the data used for the logic of app.
 */
export interface AppStateData {
  /** The current countdown rendered to the DOM by data-id attribute */
  currentCountdown: CountdownModel["id"] | null;
  /** The timer related to the theme customization */
  currentToken: Tokens;
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
  /** Flag that tell us if the app run the countdown editor */
  isEditorMode: boolean;
}

export interface AppStateSetter {
  setCurrentCountdown: (countdown: CountdownModel["id"] | null) => void;
  /** Set the current token */
  setCurrentToken: (token: Tokens) => void;
  setTimerExpired: (timerExpired: boolean) => void;
  setIsEditorMode: (isEditorMode: boolean) => void;
}
