export interface ThemeLayoutContextData {
  /** The text used for the countdown title */
  orientation: CountdownLayoutOrientation;
  /** The gap between the title and the timer */
  gap: number;
  /** Fit the width of page when the countdown layout is horizontal */
  fitOnScreen: boolean;
}

export interface ThemeLayoutContextSetter {
  setOrientation: (orientation: CountdownLayoutOrientation) => void;
  setGap: (gap: number) => void;
  setFitOnScreen: (fitOnScreen: boolean) => void;
}

export type CountdownLayoutOrientation = "vertical" | "horizontal";
