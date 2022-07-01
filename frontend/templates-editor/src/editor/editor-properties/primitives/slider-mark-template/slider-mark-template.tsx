import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

import { StringOrNumber } from "../../../../countdown-widget/types";

interface SliderMarkTemplateProps {
  min: number;
  max: number;
  step?: number;
  sliderValue?: StringOrNumber;
  onSliderChange: (value: number) => void;
}

export default function SliderMarkTemplate({
  min,
  max,
  step = 1,
  sliderValue,
  onSliderChange,
}: SliderMarkTemplateProps) {
  return (
    <Slider
      aria-label="slider-ex-6"
      onChange={onSliderChange}
      min={min}
      max={max}
      step={step}
    >
      {/* <SliderMark
          className="theme-font"
          value={sliderValue}
          fontSize="xs"
          textAlign="center"
          bg="blue.500"
          color="white"
          borderRadius={"lg"}
          mt="-10"
          ml="-5"
          w="12"
          top="100%"
        >
          {sliderValue}
        </SliderMark> */}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="blue.500">
          <Text
            as="span"
            fontSize=".65rem"
            className="theme-font"
            fontWeight={600}
          >
            {sliderValue}
          </Text>
        </Box>
      </SliderThumb>
    </Slider>
  );
}
