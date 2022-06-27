import "../../../../../style/global.css";

import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  useCheckboxGroup,
} from "@chakra-ui/react";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import { useTranslation } from "react-i18next";

// TODO: lot of logics in this component

interface UnitsProps {
  unitsShown: string[];
  onChangeUnitsShown: (unitsShown: string[]) => void;
}

export default function Units({ unitsShown, onChangeUnitsShown }: UnitsProps) {
  const { t } = useTranslation();
  const { value } = useCheckboxGroup({
    value: unitsShown,
  });

  function onChangeSelection(optionsKey: string[]) {
    let nextUnitsShown = [...optionsKey];
    nextUnitsShown = reorderUnitsShown(nextUnitsShown);
    onChangeUnitsShown(nextUnitsShown);
  }

  function reorderUnitsShown(unitsShown: string[]) {
    // "ss" must always be the last unit
    if (unitsShown.includes("ss")) {
      const ssIndex = unitsShown.indexOf("ss");
      if (ssIndex !== unitsShown.length - 1) {
        unitsShown.splice(ssIndex, 1);
        unitsShown.push("ss");
      }
    }

    // "mm" must after "hh"
    if (unitsShown.includes("mm")) {
      const indexOfMm = unitsShown.indexOf("mm");
      const indexOfHh = unitsShown.indexOf("hh");
      if (indexOfMm > indexOfHh) {
        unitsShown.splice(indexOfMm, 1);
        unitsShown.splice(indexOfHh + 1, 0, "mm");
      }
    }
    // "hh" must after "dd"
    if (unitsShown.includes("hh")) {
      const indexOfHh = unitsShown.indexOf("hh");
      const indexOfDd = unitsShown.indexOf("dd");
      if (indexOfHh > indexOfDd) {
        unitsShown.splice(indexOfHh, 1);
        unitsShown.splice(indexOfDd + 1, 0, "hh");
      }
    }

    // "dd" must be the first unit
    if (unitsShown.includes("dd")) {
      const indexOfDd = unitsShown.indexOf("dd");
      if (indexOfDd !== 0) {
        unitsShown.splice(indexOfDd, 1);
        unitsShown.splice(0, 0, "dd");
      }
    }

    return unitsShown;
  }

  return (
    <PropertyWrapper>
      <Label>{t("editor.unitsShown")}</Label>
      <Box gridColumn={"2 / -1"} borderRadius={"lg"} p={0.5}>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={value}
          onChange={onChangeSelection}
        >
          <Stack direction={["column", "row"]}>
            {unitsShown.map((unit, key) => {
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
