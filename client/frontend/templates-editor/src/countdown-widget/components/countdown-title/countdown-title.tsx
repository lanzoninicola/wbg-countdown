import "./countdown-title.css";

import React from "react";

import useAppContext from "../../../countdown-state-management/hooks/app/useAppContext";
import useThemeTitleSelector from "../../../countdown-state-management/hooks/theme/useThemeTitleSelector";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";

// TODO: way to refactor due added logic to the component

function CountdownTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();

  const viewportToken = useChakraBreakpoint();

  const { currentToken: editorToken, isEditorMode } = useAppContext();

  const editorStyle = {
    fontFamily: fontFamily,
    fontSize: isEditorMode ? fontSize[editorToken] : fontSize[viewportToken],
    color: fontColor,
    fontWeight: fontWeight,
    textAlign: "center" as CanvasTextAlign,
  };

  return (
    <h2 style={editorStyle} data-element="countdown-title" aria-label={text}>
      {text}
    </h2>
  );
}

const areEqual = () => true;
const MemoizedCountdownTitle = React.memo(CountdownTitle, areEqual);
export default MemoizedCountdownTitle;
