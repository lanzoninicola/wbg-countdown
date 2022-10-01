import useThemeTimer from "../../../countdown-state-management/hooks/theme/useThemeTimer";
import useWidgetTranslation from "../../../countdown-widget-i18n/hooks/useWidgetTranslation";
import { RemainingTime } from "../../types";
import CountdownUnit from "./countdown-unit/countdown-unit";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  const { tw } = useWidgetTranslation();
  const { hideDays, hideHours } = useThemeTimer("unit-visible");
  const separatorTheme = useThemeTimer("unit-separator");

  return (
    <div data-element="countdown-units">
      {hideDays === false && (
        <CountdownUnit
          label={days === 1 ? tw("day") : tw("days")}
          value={days}
          ariaLabelUnitNumber={tw("numberDays")}
          ariaLabelUnitLabel={tw("days")}
        />
      )}

      {separatorTheme.showSeparator && (
        <CountdownUnit
          value={separatorTheme.separatorChar}
          ariaLabelUnitNumber={"separator"}
          ariaLabelUnitLabel={"separator"}
        />
      )}

      {hideHours === false && (
        <CountdownUnit
          label={hours === 1 ? tw("hour") : tw("hours")}
          value={hours}
          ariaLabelUnitNumber={tw("numberHours")}
          ariaLabelUnitLabel={tw("hours")}
        />
      )}

      {separatorTheme.showSeparator && (
        <CountdownUnit
          value={separatorTheme.separatorChar}
          ariaLabelUnitNumber={"separator"}
          ariaLabelUnitLabel={"separator"}
        />
      )}

      <CountdownUnit
        label={minutes === 1 ? tw("minute") : tw("minutes")}
        value={minutes}
        ariaLabelUnitNumber={tw("numberMinutes")}
        ariaLabelUnitLabel={tw("minutes")}
      />

      {separatorTheme.showSeparator && (
        <CountdownUnit
          value={separatorTheme.separatorChar}
          ariaLabelUnitNumber={"separator"}
          ariaLabelUnitLabel={"separator"}
        />
      )}

      <CountdownUnit
        label={seconds === 1 ? tw("second") : tw("seconds")}
        value={seconds}
        ariaLabelUnitNumber={tw("numberSeconds")}
        ariaLabelUnitLabel={tw("seconds")}
      />
    </div>
  );
}
