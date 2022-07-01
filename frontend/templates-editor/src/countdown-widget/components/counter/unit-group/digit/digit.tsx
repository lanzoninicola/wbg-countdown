import { Text } from "@chakra-ui/react";

import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useImportantCSS from "../../../../../countdown-provider/hooks/theme/useImportantProp";
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
  const { isEditorMode, runtimeEnv } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  const [ff, fs, fsc, fw, dfc, luc] = useImportantCSS(
    runtimeEnv === "wordpress",
    theme.digitFontFamily,
    theme.digitFontSize[currentToken],
    theme.digitFontSizeChackraUI,
    theme.digitFontWeight,
    theme.digitFontColor,
    theme.lastUnitColor
  );

  return (
    <Text
      as="span"
      fontSize={isEditorMode ? fs : fsc}
      fontWeight={fw}
      fontFamily={ff}
      color={isLastDigit ? luc : dfc}
      lineHeight={1.1}
      css={{
        textRendering: "optimizeSpeed",
      }}
      {...props}
    >
      {value}
    </Text>
  );
}
