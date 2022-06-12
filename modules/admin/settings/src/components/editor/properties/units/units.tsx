import "../../../../style/global.css";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
  useCheckboxGroup,
} from "@chakra-ui/react";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import { StringOrNumber } from "@chakra-ui/utils";

export interface Option {
  key: string;
  value: string;
}

const unitOptions: Option[] = [
  {
    key: "dd",
    value: "DD",
  },
  {
    key: "hh",
    value: "HH",
  },
  {
    key: "mm",
    value: "MM",
  },
  {
    key: "ss",
    value: "SS",
  },
];

export default function Units() {
  const { value } = useCheckboxGroup({
    value: ["dd", "hh", "mm", "ss"],
  });

  function onChangeSelection(optionsKey: StringOrNumber[]) {
    //TODO: implement
  }

  return (
    <PropertyWrapper>
      <Label>Units</Label>
      <Box gridColumn={"2 / -1"} borderRadius={"lg"} p={0.5}>
        <CheckboxGroup
          colorScheme="blue"
          defaultValue={value}
          onChange={onChangeSelection}
        >
          <Stack direction={["column", "row"]}>
            {unitOptions.map((option) => {
              return (
                <Checkbox
                  key={option.key}
                  value={option.key}
                  className="theme-font"
                  size="sm"
                >
                  {option.value}
                </Checkbox>
              );
            })}
          </Stack>
        </CheckboxGroup>
      </Box>
    </PropertyWrapper>
  );
}
