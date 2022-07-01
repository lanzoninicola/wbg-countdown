import { Heading } from "@chakra-ui/react";
import React from "react";

import useAppContext from "../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useImportantCSS from "../../../countdown-provider/hooks/theme/useImportantProp";
import useThemeTitleSelector from "../../../countdown-provider/hooks/theme/useThemeTitleSelector";
import withImportant from "../../../countdown-provider/utils/withImportant";

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
  const [ff, fs, fsc, fw, fc] = useImportantCSS(
    runtimeEnv === "wordpress",
    fontFamily,
    fontSize[currentToken],
    fontSizeChackraUI,
    fontWeight,
    fontColor
  );

  return (
    <>
      <Heading
        as="h2"
        fontFamily={ff}
        fontSize={isEditorMode ? fs : fsc}
        color={fc}
        fontWeight={fw}
      >
        {text}
      </Heading>
    </>
  );
}

const areEqual = () => true;
const MemoizedCounterTitle = React.memo(CounterTitle, areEqual);
export default MemoizedCounterTitle;
