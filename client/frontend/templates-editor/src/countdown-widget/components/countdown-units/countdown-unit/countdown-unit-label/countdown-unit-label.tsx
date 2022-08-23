import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeDigitsLabelContextData } from "../../../../../countdown-provider/types/theme/timer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";
import "./countdown-unit-label.css";

interface UnitLabelProps {
  theme: ThemeDigitsLabelContextData;
  label: string;
  isDanger?: boolean;
  isLastDigit?: boolean;
  gridArea: string;
  ariaLabel: string;
  [key: string]: any;
}

export default function UnitLabel({
  label,
  isLastDigit,
  theme,
  gridArea,
  ariaLabel,
}: UnitLabelProps) {
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  const editorStyle = {
    fontSize: isEditorMode
      ? theme.labelFontSize[editorToken]
      : theme.labelFontSize[viewportToken],
    fontFamily: theme.labelFontFamily,
    fontWeight: theme.labelFontWeight,
    color: isLastDigit ? theme.lastUnitColor : theme.labelFontColor,
    gridArea: gridArea,
  };

  return (
    <span
      data-role="countdown-unit-label"
      style={editorStyle}
      aria-label={ariaLabel}
    >
      {label}
    </span>
  );
}
