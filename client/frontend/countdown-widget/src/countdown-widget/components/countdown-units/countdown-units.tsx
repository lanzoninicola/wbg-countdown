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

  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two unitNumber
  // TODO: check isDanger

  return (
    <div data-role="countdown-units">
      <CountdownUnit
        label={days === 1 ? tw("day") : tw("days")}
        value={days}
        ariaLabelUnitNumber={tw("numberDays")}
        ariaLabelUnitLabel={tw("days")}
      />
      <CountdownUnit
        label={hours === 1 ? tw("hour") : tw("hours")}
        value={hours}
        ariaLabelUnitNumber={tw("numberHours")}
        ariaLabelUnitLabel={tw("hours")}
      />
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
