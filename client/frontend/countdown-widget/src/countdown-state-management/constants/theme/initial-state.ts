import { ThemeStateData } from "../../types/theme";

const THEME_INITIAL_STATE: ThemeStateData = {
  template: {
    name: "default",
    style: "",
  },
  layout: {
    removeLink: false,
    linkTarget: "https://clockdown.lanzoninicola.com.br",
    containerSize: {
      width: 0,
      height: 0,
    },
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
    showSeparator: true,
    separatorChar: ":",
    hideDays: false,
    hideHours: false,
    hideSeconds: false,
    padWithZero: false,
    unitNumberFontFamily: "Inter",
    unitNumberFontWeight: "400",
    unitNumberFontSize: {
      sm: 14,
      md: 16,
      lg: 18,
    },
    unitNumberFontColor: "#000000",
    lastUnitColor: "#e10b0b",
    unitLabelFontFamily: "Inter",
    unitLabelFontWeight: "400",
    unitLabelFontSize: {
      sm: 14,
      md: 16,
      lg: 18,
    },
    unitLabelLanguage: "en-US",
    unitLabelFontColor: "#000000",
  },
  actionDispatched: "",
};

export default THEME_INITIAL_STATE;
