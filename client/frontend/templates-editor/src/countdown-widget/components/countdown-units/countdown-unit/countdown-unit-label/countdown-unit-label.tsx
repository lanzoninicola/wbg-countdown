import { ThemeUnitLabelContextData } from "../../../../../countdown-state-management/types/theme/timer";

interface UnitLabelProps {
  theme: ThemeUnitLabelContextData;
  label: string;
  isDanger?: boolean;
  isLastUnit?: boolean;
  gridArea: string;
  ariaLabel: string;
  [key: string]: any;
}

export default function UnitLabel({
  label,
  isLastUnit,
  theme,
  gridArea,
  ariaLabel,
}: UnitLabelProps) {
  const editorStyle = {
    color: isLastUnit ? theme.lastUnitColor : theme.unitLabelFontColor,
  };

  return (
    <span
      data-element="countdown-unit-label"
      style={editorStyle}
      aria-label={ariaLabel}
    >
      {label}
    </span>
  );
}
