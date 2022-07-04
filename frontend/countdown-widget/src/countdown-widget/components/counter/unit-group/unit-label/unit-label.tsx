import { Text } from "@chakra-ui/react";
import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";

import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useImportantCSS from "../../../../../countdown-provider/hooks/theme/useImportantProp";
import { ThemeDigitsLabelContextDataWithChackra } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";

interface UnitLabelProps {
  label: string;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeDigitsLabelContextDataWithChackra;
  [key: string]: any;
}

export default function UnitLabel({
  label,
  isLastDigit,
  theme,
  ...props
}: UnitLabelProps) {
  const { isEditorMode, runtimeEnv } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();
  const [ff, fs, fsc, fw, lfc, luc] = useImportantCSS(
    runtimeEnv === "wordpress",
    theme.labelFontFamily,
    theme.labelFontSize[currentToken],
    theme.labelFontSizeChackraUI,
    theme.labelFontWeight,
    theme.labelFontColor,
    theme.lastUnitColor
  );

  return (
    <Text
      as="span"
      fontSize={isEditorMode ? fs : fsc}
      fontWeight={fw}
      fontFamily={ff}
      color={isLastDigit ? luc : lfc}
      lineHeight={1.1}
      {...props}
    >
      {label}
    </Text>
  );
}
