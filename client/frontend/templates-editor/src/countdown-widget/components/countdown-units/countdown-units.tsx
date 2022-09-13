import useThemeTimer from "../../../countdown-state-management/hooks/theme/useThemeTimer";
import useWidgetTranslation from "../../../countdown-widget-i18n/hooks/useWidgetTranslation";
import { RemainingTime } from "../../types";
import CountdownUnit from "./countdown-unit/countdown-unit";
import "./countdown-units.css";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  const { tw } = useWidgetTranslation();
  const { hideDays, hideHours } = useThemeTimer("unit-visible");

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
      {hideHours === false && (
        <CountdownUnit
          label={hours === 1 ? tw("hour") : tw("hours")}
          value={hours}
          ariaLabelUnitNumber={tw("numberHours")}
          ariaLabelUnitLabel={tw("hours")}
        />
      )}

      <CountdownUnit
        label={minutes === 1 ? tw("minute") : tw("minutes")}
        value={minutes}
        ariaLabelUnitNumber={tw("numberMinutes")}
        ariaLabelUnitLabel={tw("minutes")}
      />

      <CountdownUnit
        label={seconds === 1 ? tw("second") : tw("seconds")}
        value={seconds}
        isLastUnit={true}
        ariaLabelUnitNumber={tw("numberSeconds")}
        ariaLabelUnitLabel={tw("seconds")}
      />
    </div>
  );
}
