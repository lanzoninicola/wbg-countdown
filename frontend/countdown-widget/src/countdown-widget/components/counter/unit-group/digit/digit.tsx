import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { ThemeDigitsContextData } from "../../../../../countdown-provider/types/theme/timer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";
import { StringOrNumber } from "../../../../types";
import "./digit.css";

interface DigitProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeDigitsContextData;
  gridArea: string;
  ariaLabel: string;
  [key: string]: any;
}

export default function Digit({
  value,
  isDanger,
  isLastDigit,
  theme,
  gridArea,
  ariaLabel,
  ...props
}: DigitProps) {
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  const style = {
    fontSize: isEditorMode
      ? theme.digitFontSize[editorToken]
      : theme.digitFontSize[viewportToken],
    fontFamily: theme.digitFontFamily,
    fontWeight: theme.digitFontWeight,
    color: isLastDigit ? theme.lastUnitColor : theme.digitFontColor,
    gridArea: gridArea,
  };

  return (
    <span data-role="clockdown-digit" style={style} aria-label={ariaLabel}>
      {value}
    </span>
  );
}
