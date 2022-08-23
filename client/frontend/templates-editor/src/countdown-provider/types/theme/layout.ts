export interface ThemeLayoutContextData {
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

export interface ThemeLayoutContextSetter {
  setOrientation: (orientation: CountdownLayoutOrientation) => void;
  setGap: (gap: number) => void;
  setFitOnScreen: (fitOnScreen: boolean) => void;
  setTransparentBackground: (transparentBackground: boolean) => void;
  setBackgroundColor: (backgroundColor: string) => void;
}

export type CountdownLayoutOrientation = "vertical" | "horizontal";
