import { ChakraToken } from "../theme/responsive";
import { CountdownModel } from "../../../countdown-widget/types";
import { FontsizeUnit } from "../../../countdown-widget-typography/types";

export type EditorContext = EditorStateData;

/**
 * This is the shape of the data used for the logic of app.
 */
export interface EditorStateData {
  /** The current countdown rendered to the DOM by data-id attribute */
  currentCountdown: CountdownModel["id"] | null;
  /** The timer related to the theme customization */
  currentToken: ChakraToken;
  /** Flag that tell us if the app run the countdown editor */
  isEditorMode: boolean;
  /** Global unit used for the fontsize */
  fontSizeUnit: FontsizeUnit;
}
