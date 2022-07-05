import useAppContext from "../../../../../countdown-provider/hooks/app/useAppContext";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useImportantCSS from "../../../../../countdown-provider/hooks/theme/useImportantProp";
import { ThemeDigitsContextDataWithChackra } from "../../../../../countdown-provider/hooks/theme/useThemeTimer";
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
  const { isEditorMode, runtimeEnv } = useAppContext();
  const { currentToken } = useCurrentTokenSelector();

  // const [ff, fs, fsc, fw, dfc, luc] = useImportantCSS(
  //   runtimeEnv === "wordpress",
  //   theme.digitFontFamily,
  //   theme.digitFontSize[currentToken],
  //   theme.digitFontSizeChackraUI,
  //   theme.digitFontWeight,
  //   theme.digitFontColor,
  //   theme.lastUnitColor
  // );

  return (
    <span
      // fontSize={isEditorMode ? fs : fsc}
      style={{
        fontSize: "52px",
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
