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
  // const [ff, fs, fsc, fw, lfc, luc] = useImportantCSS(
  //   runtimeEnv === "wordpress",
  //   theme.labelFontFamily,
  //   theme.labelFontSize[currentToken],
  //   theme.labelFontSizeChackraUI,
  //   theme.labelFontWeight,
  //   theme.labelFontColor,
  //   theme.lastUnitColor
  // );

  return (
    <span
      // fontSize={isEditoMode ? fs : fsc}
      style={{
        fontSize: "52px",
        fontFamily: theme.labelFontFamily,
        fontWeight: theme.labelFontWeight,
        color: isLastDigit ? theme.lastUnitColor : theme.labelFontColor,
        lineHeight: 1.1,
        gridArea: props.gridArea,
      }}
    >
      {label}
    </span>
  );
}
