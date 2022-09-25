import { ThemeUnitNumberContextData } from "../../../../../countdown-state-management/types/theme/timer";
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
  const editorStyle = {
    color: isLastUnit ? theme.lastUnitColor : theme.unitNumberFontColor,
  };

  return (
    <span
      data-element="countdown-unit-number"
      style={editorStyle}
      aria-label={ariaLabel}
    >
      {value}
    </span>
  );
}
