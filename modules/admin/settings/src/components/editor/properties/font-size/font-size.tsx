import { Box } from "@chakra-ui/react";
import SliderMarkTemplate from "../../../shared/slider-mark-template/slider-mark-template";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface FontSizeProps {
  label: string;
  fontSizeSelected: number;
  onFontSizeSelected: (fontSizeSelected: number) => void;
}

export default function FontSize({
  label,
  fontSizeSelected,
  onFontSizeSelected,
}: FontSizeProps) {
  const initialSize = 16;

  return (
    <PropertyWrapper>
      <Label>{label || "Font size (px)"}</Label>
      <Box gridColumn={"2 / -1"}>
        <SliderMarkTemplate
          min={4}
          max={150}
          sliderValue={fontSizeSelected}
          onSliderChange={onFontSizeSelected}
        />
      </Box>
    </PropertyWrapper>
  );
}
