import { Text } from "@chakra-ui/react";
import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";

import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeUnitLabelWithChackraUIFontSize } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";

interface UnitLabelProps {
  label: string;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeUnitLabelWithChackraUIFontSize;
  [key: string]: any;
}

export default function UnitLabel({
  label,
  isLastDigit,
  theme,
  ...props
}: UnitLabelProps) {
  const { isEditorMode } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <Text
      as="span"
      fontSize={
        isEditorMode
          ? theme.labelFontSize[currentToken]
          : theme.labelFontSizeChackraUI
      }
      fontWeight={theme.labelFontWeight}
      fontFamily={theme.labelFontFamily}
      color={isLastDigit ? theme.lastUnitColor : theme.labelFontColor}
      {...props}
    >
      {label}
    </Text>
  );
}
