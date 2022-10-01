import React, { useEffect } from "react";
import { useEditorContext } from "../../../countdown-state-management";
import useThemeLayout from "../../../countdown-state-management/hooks/theme/useThemeLayout";
import useThemeTemplate from "../../../countdown-state-management/hooks/theme/useThemeTemplate";
import useThemeTimer from "../../../countdown-state-management/hooks/theme/useThemeTimer";
import useThemeTitleSelector from "../../../countdown-state-management/hooks/theme/useThemeTitleSelector";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";
import {
  cssAlignItemsCenter,
  cssflex,
  cssFlexColumn,
  cssFlexRow,
  cssJustifyContentCenter,
} from "../../utils/css-style-text";

export default function CountdownWidgetStyleTag() {
  const {
    fitOnScreen,
    orientation,
    gap,
    transparentBackground,
    backgroundColor,
  } = useThemeLayout();
  const { fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();
  const viewportToken = useChakraBreakpoint();
  const unitNumberTheme = useThemeTimer("unit-number");
  const unitLabelTheme = useThemeTimer("unit-label");
  const separatorTheme = useThemeTimer("unit-separator");

  const {
    currentToken: editorToken,
    isEditorMode,
    fontSizeUnit,
  } = useEditorContext();
  const { style } = useThemeTemplate();

  const flex = React.useMemo(() => cssflex(), []);
  const justifyContentCenter = React.useMemo(
    () => cssJustifyContentCenter(),
    []
  );
  const alignItemsCenter = React.useMemo(() => cssAlignItemsCenter(), []);
  const flexColumn = React.useMemo(() => cssFlexColumn(), []);
  const flexRow = React.useMemo(() => cssFlexRow(), []);

  const countdownWidget = `
    div[data-element="countdown-widget"] {
      ${flex}
      ${justifyContentCenter}
      width: 100%;
  }`;

  const countdownContainer = `
  div[data-element="countdown-container"] {
      width: 100%;
  }`;

  const countdownWrapper = `
  div[data-element="countdown-wrapper"] {
      ${flex} 
      ${alignItemsCenter}
      ${React.useMemo(
        () => (orientation === "vertical" ? cssFlexColumn() : cssFlexRow()),
        [orientation]
      )}
      -webkit-justify-content: ${
        gap === 1
          ? "space-evenly"
          : gap === 2
          ? "space-around"
          : "space-between"
      };
      justify-content: ${
        gap === 1
          ? "space-evenly"
          : gap === 2
          ? "space-around"
          : "space-between"
      };
      gap: 1.5rem;
      padding: 1rem 0.5rem;
      width: ${fitOnScreen ? "100%" : "max-content"};
      background: ${transparentBackground ? "transparent" : backgroundColor};
  }`;

  const title = `
  h2[data-element="countdown-title"] {
    margin: 0;
    line-height: 1.3;
    font-family: ${fontFamily};
    font-size: ${
      isEditorMode ? fontSize[editorToken] : fontSize[viewportToken]
    }${fontSizeUnit};	
    color: ${fontColor};
    font-weight: ${fontWeight};
    text-align: center;
  }`;

  const units = `
  div[data-element="countdown-units"] {
    ${flex}
    ${alignItemsCenter}
    ${flexRow}
}`;

  const unitGrorup = `
  div[data-element="countdown-unit"] {
    display: grid;
    grid-template-areas:
      "number separator"
      "label empty";
    ${alignItemsCenter}
    justify-items: center;

  }`;

  const unitNumber = `
  span[data-element="countdown-unit-number"] {
    text-rendering: optimizeSpeed;
    grid-area: number;
    font-size: ${
      isEditorMode
        ? unitNumberTheme.unitNumberFontSize[editorToken]
        : unitNumberTheme.unitNumberFontSize[viewportToken]
    }${fontSizeUnit};
    font-weight: ${unitNumberTheme.unitNumberFontWeight};
    font-family: ${unitNumberTheme.unitNumberFontFamily};
    color: ${unitNumberTheme.unitNumberFontColor};
  }`;

  const unitLabel = `
  span[data-element="countdown-unit-label"] {
    line-height: 1.1;
    text-rendering: optimizeSpeed;
    grid-area: label;
     font-size: ${
       isEditorMode
         ? unitLabelTheme.unitLabelFontSize[editorToken]
         : unitLabelTheme.unitLabelFontSize[viewportToken]
     }px;
    font-weight: ${unitLabelTheme.unitLabelFontWeight};
    font-family: ${unitLabelTheme.unitLabelFontFamily};
    color: ${unitLabelTheme.unitLabelFontColor};
  }`;

  const lastUnit = `
  span[data-element="countdown-units"]:last-child {
    color: ${unitNumberTheme.lastUnitColor};
  }`;

  let unitSeparator = `
  div[data-element="countdown-unit"][data-unit-type="separator"] {
    text-rendering: optimizeSpeed;`;
  separatorTheme.showSeparator === false
    ? (unitSeparator += `display: none;`)
    : (unitSeparator += `}`);

  let styleArray = [
    countdownWidget,
    countdownContainer,
    countdownWrapper,
    title,
    units,
    unitGrorup,
    unitNumber,
    unitLabel,
    unitSeparator,
    lastUnit,
  ];
  let widgetStyle = styleArray.join(" ");

  return (
    <style data-element="countdown-widget-style-tag">
      {style ? style : widgetStyle}
    </style>
  );
}
