import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeDigitsLabelContextDataWithChackra } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";

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
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  return (
    <span
      style={{
        fontSize: isEditorMode
          ? theme.labelFontSize[editorToken]
          : theme.labelFontSize[viewportToken],
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
