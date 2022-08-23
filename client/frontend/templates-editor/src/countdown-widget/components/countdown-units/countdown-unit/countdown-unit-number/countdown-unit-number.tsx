import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeDigitsContextData } from "../../../../../countdown-provider/types/theme/timer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";
import { StringOrNumber } from "../../../../types";
import "./countdown-unit-number.css";

interface CountdownUnitNumberProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeDigitsContextData;
  gridArea: string;
  ariaLabel: string;
  [key: string]: any;
}

export default function CountdownUnitNumber({
  value,
  isDanger,
  isLastDigit,
  theme,
  gridArea,
  ariaLabel,
  ...props
}: CountdownUnitNumberProps) {
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  const editorStyle = {
    fontSize: isEditorMode
      ? theme.digitFontSize[editorToken]
      : theme.digitFontSize[viewportToken],
    fontFamily: theme.digitFontFamily,
    fontWeight: theme.digitFontWeight,
    color: isLastDigit ? theme.lastUnitColor : theme.digitFontColor,
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
