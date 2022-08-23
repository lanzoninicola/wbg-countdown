import React from "react";

import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";
import "./countdown-title.css";

// TODO: way to refactor due added logic to the component

function CountdownTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();

  const viewportToken = useChakraBreakpoint();

  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  const editorStyle = {
    fontFamily: fontFamily,
    fontSize: isEditorMode ? fontSize[editorToken] : fontSize[viewportToken],
    color: fontColor,
    fontWeight: fontWeight,
    textAlign: "center" as CanvasTextAlign,
  };

  return (
    <h2 style={editorStyle} data-role="countdown-title" aria-label={text}>
      {text}
    </h2>
  );
}

const areEqual = () => true;
const MemoizedCountdownTitle = React.memo(CountdownTitle, areEqual);
export default MemoizedCountdownTitle;
