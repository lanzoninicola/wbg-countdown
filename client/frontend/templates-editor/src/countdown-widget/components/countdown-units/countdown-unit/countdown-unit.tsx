import React from "react";

import useThemeTimer from "../../../../countdown-state-management/hooks/theme/useThemeTimer";
import { StringOrNumber } from "../../../types";
import CountdownUnitNumber from "./countdown-unit-number/countdown-unit-number";
import UnitLabel from "./countdown-unit-label/countdown-unit-label";
import CountdownUnitSeparator from "./countdown-unit-separator/countdown-unit-separator";
import "./countdown-unit.css";

interface CountdownUnitProps {
  label: string;
  value: StringOrNumber;
  isDanger?: boolean;
  isLastUnit?: boolean;
  /** aria-label attribute for the number of timer unit */
  ariaLabelUnitNumber: string;
  /** aria-label attribute for the label of timer unit */
  ariaLabelUnitLabel: string;
}

function CountdownUnit({
  label,
  value,
  isDanger,
  isLastUnit,
  ariaLabelUnitNumber,
  ariaLabelUnitLabel,
}: CountdownUnitProps) {
  const unitNumberTheme = useThemeTimer("unit-number");
  const unitLabelTheme = useThemeTimer("unit-label");
  const separatorTheme = useThemeTimer("unit-separator");

  return (
    <div
      data-element="countdown-unit"
      data-unit-type={`${label.toLowerCase()}`}
    >
      <CountdownUnitNumber
        gridArea={"number"}
        value={value}
        isDanger={isDanger}
        isLastUnit={isLastUnit}
        theme={unitNumberTheme}
        ariaLabel={ariaLabelUnitNumber}
      />
      <UnitLabel
        gridArea={"label"}
        label={label}
        isLastUnit={isLastUnit}
        theme={unitLabelTheme}
        ariaLabel={ariaLabelUnitLabel}
      />
      {!isLastUnit && separatorTheme.showSeparator && (
        <CountdownUnitSeparator
          gridArea={"separator"}
          separatorText={separatorTheme.separatorChar}
        />
      )}
    </div>
  );
}

const areEqual = (
  prevProps: CountdownUnitProps,
  nextProps: CountdownUnitProps
) => {
  return (
    prevProps.label === nextProps.label && prevProps.value === nextProps.value
  );
};

const MemoizedCountdownUnit = React.memo(CountdownUnit, areEqual);

export default MemoizedCountdownUnit;
