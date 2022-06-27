import { Box, Text } from "@chakra-ui/react";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface FontSizeProps {
  label: string;
  fontSizeSelected?: string;
  onFontSizeSelected: (fontSizeSelected: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function FontSize({
  label,
  fontSizeSelected,
  onFontSizeSelected,
  min = 1,
  max = 10,
  step = 0.25,
}: FontSizeProps) {
  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 4"}>
        <SliderMarkTemplate
          min={min}
          max={max}
          step={step}
          onSliderChange={onFontSizeSelected}
        />
      </Box>
      <Text
        className="theme-font"
        fontSize={"xs"}
        fontWeight={600}
        textAlign="right"
      >
        {fontSizeSelected}
      </Text>
    </PropertyWrapper>
  );
}
