import React from "react";

import useThemeTimer from "../../../../countdown-provider/hooks/theme/useThemeTimer";
import { StringOrNumber } from "../../../types";
import CountdownUnitNumber from "./countdown-unit-number/countdown-unit-number";
import UnitLabel from "./countdown-unit-label/countdown-unit-label";
import CountdownUnitSeparator from "./countdown-unit-separator/countdown-unit-separator";
import "./countdown-unit.css";

interface CountdownUnitProps {
  label: string;
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  /** aria-label attribute for the digit */
  ariaLabelDigit: string;
  /** aria-label attribute for the digit label */
  ariaLabelDigitLabel: string;
}

function CountdownUnit({
  label,
  value,
  isDanger,
  isLastDigit,
  ariaLabelDigit,
  ariaLabelDigitLabel,
}: CountdownUnitProps) {
  const digitTheme = useThemeTimer("unit-digit");
  const labelTheme = useThemeTimer("unit-label");
  const separatorTheme = useThemeTimer("unit-separator");

  return (
    <div data-role="countdown-unit" data-unit-type={`${label.toLowerCase()}`}>
      <CountdownUnitNumber
        gridArea={"digit"}
        value={value}
        isDanger={isDanger}
        isLastDigit={isLastDigit}
        theme={digitTheme}
        ariaLabel={ariaLabelDigit}
      />
      <UnitLabel
        gridArea={"label"}
        label={label}
        isLastDigit={isLastDigit}
        theme={labelTheme}
        ariaLabel={ariaLabelDigitLabel}
      />
      {!isLastDigit && separatorTheme.showSeparator && (
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
