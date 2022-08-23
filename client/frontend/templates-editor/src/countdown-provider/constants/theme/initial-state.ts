// TODO: define the props in PRO licensing e verify if they are used. But HOW?. Limit client hacking.

import { ThemeStateData } from "../../types/theme";

const THEME_INITIAL_STATE: ThemeStateData = {
  global: {
    containerSize: {
      width: 0,
      height: 0,
    },
  },
  layout: {
    orientation: "vertical",
    gap: 1,
    fitOnScreen: false,
    transparentBackground: false,
    backgroundColor: "#ffffff",
  },
  title: {
    text: "Countdown to New Year",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: {
      sm: 14,
      md: 16,
      lg: 18,
    },
    fontColor: "#000000",
  },
  timer: {
    unitsShown: ["dd", "hh", "mm", "ss"],
    showSeparator: true,
    separatorChar: ":",
    digitFontFamily: "Inter",
    digitFontWeight: "400",
    digitFontSize: {
      sm: 14,
      md: 16,
      lg: 18,
    },
    digitFontColor: "#000000",
    lastUnitColor: "#e10b0b",
    labelFontFamily: "Inter",
    labelFontWeight: "400",
    labelFontSize: {
      sm: 14,
      md: 16,
      lg: 18,
    },
    labelFontColor: "#000000",
  },
};

export default THEME_INITIAL_STATE;
