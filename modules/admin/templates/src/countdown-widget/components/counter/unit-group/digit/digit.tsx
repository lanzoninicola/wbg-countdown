import { Text } from "@chakra-ui/react";

import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeUnitDigitWithChackraUIFontSize } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";
import { StringOrNumber } from "../../../../types";

interface DigitProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeUnitDigitWithChackraUIFontSize;
  [key: string]: any;
}

export default function Digit({
  value,
  isDanger,
  isLastDigit,
  theme,
  ...props
}: DigitProps) {
  const { isEditorMode } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <Text
      as="span"
      fontSize={
        isEditorMode
          ? theme.digitFontSize[currentToken]
          : theme.digitFontSizeChackraUI
      }
      fontWeight={theme.digitFontWeight}
      fontFamily={theme.digitFontFamily}
      color={isLastDigit ? theme.lastUnitColor : theme.digitFontColor}
      css={{
        textRendering: "optimizeSpeed",
      }}
      {...props}
    >
      {value}
    </Text>
  );
}
