export interface ThemeLayoutContextData {
  containerSize: ElementSize;
  /** The text used for the countdown title */
  orientation: CountdownLayoutOrientation;
  /** The space between the title and timer (1)space-evenly (2)space-around (3)space-between */
  gap: number;
  /** Fit the width of page when the countdown layout is horizontal */
  fitOnScreen: boolean;
  /** Make the background transparent */
  transparentBackground: boolean;
  /** The background color of the countdown */
  backgroundColor: string;
}

export type CountdownLayoutOrientation = "vertical" | "horizontal";

export interface ElementSize {
  width: number;
  height: number;
}
