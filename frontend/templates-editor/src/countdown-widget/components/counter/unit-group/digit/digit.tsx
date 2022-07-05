import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useImportantCSS from "../../../../../countdown-provider/hooks/theme/useImportantProp";
import { ThemeDigitsContextDataWithChackra } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";
import useChakraBreakpoint from "../../../../hooks/useChakraBreakpoint";
import { StringOrNumber } from "../../../../types";

interface DigitProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeDigitsContextDataWithChackra;
  [key: string]: any;
}

export default function Digit({
  value,
  isDanger,
  isLastDigit,
  theme,
  ...props
}: DigitProps) {
  const viewportToken = useChakraBreakpoint();
  const { isEditorMode } = useAppContext();
  const { currentToken: editorToken } = useCurrentTokenSelector();

  return (
    <span
      style={{
        fontSize: isEditorMode
          ? theme.digitFontSize[editorToken]
          : theme.digitFontSize[viewportToken],
        fontFamily: theme.digitFontFamily,
        fontWeight: theme.digitFontWeight,
        color: isLastDigit ? theme.lastUnitColor : theme.digitFontColor,
        lineHeight: 1.1,
        gridArea: props.gridArea,
        textRendering: "optimizeSpeed",
      }}
    >
      {value}
    </span>
  );
}
