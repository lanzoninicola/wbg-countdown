import { ChakraToken } from "../theme/responsive";
import { CountdownModel } from "../../../countdown-widget/types";
import { RuntimeEnvironment } from "..";

export type AppContext = AppStateData & AppStateSetter;

/**
 * This is the shape of the data used for the logic of app.
 */
export interface AppStateData {
  /** The current countdown rendered to the DOM by data-id attribute */
  currentCountdown: CountdownModel["id"] | null;
  /** The timer related to the theme customization */
  currentToken: ChakraToken;
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
  /** Flag that tell us if the app run the countdown editor */
  isEditorMode: boolean;
  /** The runtime environment */
  runtimeEnv: RuntimeEnvironment;
}

export interface AppStateSetter {
  setCurrentCountdown: (countdown: CountdownModel["id"] | null) => void;
  /** Set the current token */
  setCurrentToken: (token: ChakraToken) => void;
  setTimerExpired: (timerExpired: boolean) => void;
  setIsEditorMode: (isEditorMode: boolean) => void;
  setRuntimeEnv: (runtimeEnv: RuntimeEnvironment) => void;
}
