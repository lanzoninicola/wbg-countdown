import { ThemeLayoutContextData } from "./layout";
import { ThemeTimerContextData } from "./timer";
import { ThemeTitleContextData } from "./title";

export type ThemeContext = ThemeStateData;

/**
 * This describes the shape of data coming from the Editor related to the theme customization.
 * This is used in the Editor component to maintain syncrhronized between them.
 */
export interface ThemeStateData {
  /** All style data related to the layout of countdown */
  layout: ThemeLayoutContextData;
  /** All the properties related to the customization of title */
  title: ThemeTitleContextData;
  /** All the properties related to the customization of timer */
  timer: ThemeTimerContextData;

  /** The last action dispatched that changed the state */
  actionDispatched: string;
}
