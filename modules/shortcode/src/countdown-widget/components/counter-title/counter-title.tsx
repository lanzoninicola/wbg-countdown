import { Heading } from "@chakra-ui/react";
import React, { useLayoutEffect, useRef, useState } from "react";

import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";

// TODO: custom unit size for the fontSize

function CounterTitle() {
  const {
    text,
    fontColor,
    fontFamily,
    fontSize,
    fontSizeChackraUI,
    fontWeight,
  } = useThemeTitleSelector();
  const { isEditorMode } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <>
      {console.log(text)}
      <Heading
        as="h2"
        fontFamily={fontFamily}
        fontSize={isEditorMode ? fontSize[currentToken] : fontSizeChackraUI}
        color={fontColor}
        fontWeight={fontWeight}
      >
        {text}
      </Heading>
    </>
  );
}

const areEqual = () => true;
const MemoizedCounterTitle = React.memo(CounterTitle, areEqual);
export default MemoizedCounterTitle;
