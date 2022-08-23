import "../../../../../style/global.css";

import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  useCheckboxGroup,
} from "@chakra-ui/react";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";
import { useTranslation } from "react-i18next";
import { TimeUnits } from "../../../../../countdown-provider/types/theme/timer";

// TODO: lot of logics in this component

interface UnitsVisibleProps {
  unitsVisible: string[];
  onUnitsVisibleChange: (unitsVisible: TimeUnits[]) => void;
}

export default function UnitsVisible({
  unitsVisible,
  onUnitsVisibleChange,
}: UnitsVisibleProps) {
  const { t } = useTranslation();
  const { value } = useCheckboxGroup({
    value: unitsVisible,
  });

  function onChangeSelection(optionsKey: string[]) {
    let nextUnitsVisible = [...optionsKey];
    nextUnitsVisible = reorderUnitsVisible(nextUnitsVisible);
    onUnitsVisibleChange(nextUnitsVisible as TimeUnits[]);
  }

  function reorderUnitsVisible(unitsVisible: string[]) {
    // "ss" must always be the last unit
    if (unitsVisible.includes("ss")) {
      const ssIndex = unitsVisible.indexOf("ss");
      if (ssIndex !== unitsVisible.length - 1) {
        unitsVisible.splice(ssIndex, 1);
        unitsVisible.push("ss");
      }
    }

    // "mm" must after "hh"
    if (unitsVisible.includes("mm")) {
      const indexOfMm = unitsVisible.indexOf("mm");
      const indexOfHh = unitsVisible.indexOf("hh");
      if (indexOfMm > indexOfHh) {
        unitsVisible.splice(indexOfMm, 1);
        unitsVisible.splice(indexOfHh + 1, 0, "mm");
      }
    }
    // "hh" must after "dd"
    if (unitsVisible.includes("hh")) {
      const indexOfHh = unitsVisible.indexOf("hh");
      const indexOfDd = unitsVisible.indexOf("dd");
      if (indexOfHh > indexOfDd) {
        unitsVisible.splice(indexOfHh, 1);
        unitsVisible.splice(indexOfDd + 1, 0, "hh");
      }
    }

    // "dd" must be the first unit
    if (unitsVisible.includes("dd")) {
      const indexOfDd = unitsVisible.indexOf("dd");
      if (indexOfDd !== 0) {
        unitsVisible.splice(indexOfDd, 1);
        unitsVisible.splice(0, 0, "dd");
      }
    }

    return unitsVisible;
  }

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.digits.unitsVisible")}</Label>
      <Box gridColumn={"2 / -1"} borderRadius={"lg"} p={0.5}>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={value}
          onChange={onChangeSelection}
        >
          <Stack direction={["column", "row"]}>
            {unitsVisible.map((unit, key) => {
              return (
                <Checkbox
                  key={key}
                  value={unit}
                  className="theme-font"
                  size="sm"
                >
                  {unit}
                </Checkbox>
              );
            })}
          </Stack>
        </CheckboxGroup>
      </Box>
    </PropertyWrapper>
  );
}
