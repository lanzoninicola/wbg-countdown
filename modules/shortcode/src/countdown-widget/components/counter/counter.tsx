import { HStack } from "@chakra-ui/react";
import useWidgetTranslation from "../../../countdown-widget-i18n/hooks/useWidgetTranslation";
import { RemainingTime } from "../../types";
import UnitGroup from "./unit-group/unit-group";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  const { tw } = useWidgetTranslation();

  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two digits
  // TODO: check isDanger

  return (
    <HStack>
      <UnitGroup label={days === 1 ? tw("day") : tw("days")} value={days} />
      <UnitGroup label={hours === 1 ? tw("hour") : tw("hours")} value={hours} />
      <UnitGroup
        label={minutes === 1 ? tw("minute") : tw("minutes")}
        value={minutes}
      />
      <UnitGroup
        label={seconds === 1 ? tw("second") : tw("seconds")}
        value={seconds}
        isLastDigit={true}
      />
    </HStack>
  );
}
