export interface ThemeLayoutContextData {
  /** The text used for the countdown title */
  orientation: CountdownLayoutOrientation;
}

export interface ThemeLayoutContextSetter {
  setOrientation: (orientation: CountdownLayoutOrientation) => void;
}

export type CountdownLayoutOrientation = "vertical" | "horizontal";
