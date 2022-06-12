import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

interface SliderMarkTemplateProps {
  min: number;
  max: number;
  step?: number;
  sliderValue: number;
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
          {sliderValue}px
        </SliderMark> */}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="blue.500">
          <Text as="span" fontSize="xs" className="theme-font">
            {sliderValue}
          </Text>
        </Box>
      </SliderThumb>
    </Slider>
  );
}
