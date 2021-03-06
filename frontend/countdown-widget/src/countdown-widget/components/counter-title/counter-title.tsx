import React from "react";

import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";
import "./counter-title.css";

// TODO: way to refactor due added logic to the component

function CounterTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();

  const viewportToken = useChakraBreakpoint();

  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  const style = {
    fontFamily: fontFamily,
    fontSize: isEditorMode ? fontSize[editorToken] : fontSize[viewportToken],
    color: fontColor,
    fontWeight: fontWeight,
  };

  return (
    <h2 style={style} data-role="clockdown-title" aria-label={text}>
      {text}
    </h2>
  );
}

const areEqual = () => true;
const MemoizedCounterTitle = React.memo(CounterTitle, areEqual);
export default MemoizedCounterTitle;
