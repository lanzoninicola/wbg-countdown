import { ThemeStateData } from "../../types/theme";

const THEME_INITIAL_STATE: ThemeStateData = {
  template: {
    id: "default",
    name: "Default",
    style:
      "div[data-element=countdown-units],div[data-element=countdown-widget],div[data-element=countdown-wrapper]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox}h2[data-element=countdown-title],span[data-element=countdown-unit-label],span[data-element=countdown-unit-number]{font-size:16px;font-weight:400;font-family:Inter;color:#000}a[data-element=countdown-link-wrapper]{color:inherit;-webkit-text-decoration:none;text-decoration:none}div[data-element=countdown-widget]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;justify-content:center;width:100%}div[data-element=countdown-container]{width:100%}div[data-element=countdown-wrapper]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-evenly;justify-content:space-evenly;gap:1.5rem;padding:1rem .5rem;width:max-content;background:#fff}h2[data-element=countdown-title]{margin:0;line-height:1.3;text-align:center}div[data-element=countdown-units]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}div[data-element=countdown-unit]{display:grid;grid-template-areas:'number separator' 'label empty';-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center}span[data-element=countdown-unit-number]{text-rendering:optimizeSpeed;grid-area:number}span[data-element=countdown-unit-label]{line-height:1.1;text-rendering:optimizeSpeed;grid-area:label}div[data-element=countdown-unit][data-unit-type=separator]{text-rendering:optimizeSpeed}span[data-element=countdown-units]:last-child{color:#e10b0b}",
  },
  layout: {
    removeLink: false,
    linkTarget: "https://clockdown.xyz/",
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
    text: "Super promo! 50% off on all products until 31/12/2021 23:59:59. Don't miss out!!!  🎉 🎉 🎉",
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
