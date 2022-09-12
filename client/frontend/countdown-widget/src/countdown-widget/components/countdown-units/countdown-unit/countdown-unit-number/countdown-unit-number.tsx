import "./countdown-unit-number.css";

import useAppContext from "../../../../../countdown-state-management/hooks/app/useAppContext";
import { ThemeUnitNumberContextData } from "../../../../../countdown-state-management/types/theme/timer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";
import { StringOrNumber } from "../../../../types";

interface CountdownUnitNumberProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastUnit?: boolean;
  theme: ThemeUnitNumberContextData;
  gridArea: string;
  ariaLabel: string;
  [key: string]: any;
}

export default function CountdownUnitNumber({
  value,
  isLastUnit,
  theme,
  gridArea,
  ariaLabel,
}: CountdownUnitNumberProps) {
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useAppContext();

  const editorStyle = {
    fontSize: isEditorMode
      ? theme.unitNumberFontSize[editorToken]
      : theme.unitNumberFontSize[viewportToken],
    fontFamily: theme.unitNumberFontFamily,
    fontWeight: theme.unitNumberFontWeight,
    color: isLastUnit ? theme.lastUnitColor : theme.unitNumberFontColor,
    gridArea: gridArea,
  };

  return (
    <span
      data-role="countdown-unit-number"
      style={editorStyle}
      aria-label={ariaLabel}
    >
      {value}
    </span>
  );
}
