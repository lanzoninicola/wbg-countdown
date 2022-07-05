import React from "react";

import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";

// TODO: way to refactor due added logic to the component

function CounterTitle() {
  const {
    text,
    fontColor,
    fontFamily,
    fontSize,
    fontSizeChackraUI,
    fontWeight,
  } = useThemeTitleSelector();

  const { isEditorMode, runtimeEnv } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();
  // const [ff, fs, fsc, fw, fc] = useImportantCSS(
  //   runtimeEnv === "wordpress",
  //   fontFamily,
  //   fontSize[currentToken],
  //   fontSizeChackraUI,
  //   fontWeight,
  //   fontColor
  // );

  const style = {
    fontFamily: fontFamily,
    // fontSize: isEditorMode ? fontSize[currentToken] : fontSizeChackraUI,
    fontSize: "52px",
    color: fontColor,
    fontWeight: fontWeight,
    margin: 0,
  };

  return (
    <>
      <h2 style={style}>{text}</h2>
    </>
  );
}

const areEqual = () => true;
const MemoizedCounterTitle = React.memo(CounterTitle, areEqual);
export default MemoizedCounterTitle;
