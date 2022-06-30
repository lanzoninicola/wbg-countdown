import { Heading } from "@chakra-ui/react";
import React from "react";

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
