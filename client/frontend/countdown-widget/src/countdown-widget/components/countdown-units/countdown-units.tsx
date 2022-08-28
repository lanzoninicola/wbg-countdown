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
        ariaLabelDigit={tw("numberDays")}
        ariaLabelDigitLabel={tw("days")}
      />
      <CountdownUnit
        label={hours === 1 ? tw("hour") : tw("hours")}
        value={hours}
        ariaLabelDigit={tw("numberHours")}
        ariaLabelDigitLabel={tw("hours")}
      />
      <CountdownUnit
        label={minutes === 1 ? tw("minute") : tw("minutes")}
        value={minutes}
        ariaLabelDigit={tw("numberMinutes")}
        ariaLabelDigitLabel={tw("minutes")}
      />
      <CountdownUnit
        label={seconds === 1 ? tw("second") : tw("seconds")}
        value={seconds}
        isLastDigit={true}
        ariaLabelDigit={tw("numberSeconds")}
        ariaLabelDigitLabel={tw("seconds")}
      />
    </div>
  );
}
