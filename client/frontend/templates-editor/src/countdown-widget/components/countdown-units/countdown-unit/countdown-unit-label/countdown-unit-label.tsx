import "./countdown-unit-label.css";

import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import { ThemeUnitLabelContextData } from "../../../../../countdown-provider/types/theme/timer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";

interface UnitLabelProps {
  theme: ThemeUnitLabelContextData;
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
  const { currentToken: editorToken } = useAppContext();

  const editorStyle = {
    fontSize: isEditorMode
      ? theme.unitLabelFontSize[editorToken]
      : theme.unitLabelFontSize[viewportToken],
    fontFamily: theme.unitLabelFontFamily,
    fontWeight: theme.unitLabelFontWeight,
    color: isLastDigit ? theme.lastUnitColor : theme.unitLabelFontColor,
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
