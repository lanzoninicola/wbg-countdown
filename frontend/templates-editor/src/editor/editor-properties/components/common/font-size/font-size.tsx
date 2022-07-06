import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useCurrentTokenSelector from "../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";

import {
  ChakraToken,
  ResponsiveValue,
} from "../../../../../countdown-provider/types/theme/responsive";
import { withUnit } from "../../../../../countdown-widget-typography/countdown-widget-typography";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../../primitives/label/label";
import SliderMarkTemplate from "../../../primitives/slider-mark-template/slider-mark-template";
import FontSizePreview from "./font-size-preview/font-size-preview";

interface FontSizeProps {
  label: string;
  fontSizeChanged: ResponsiveValue;
  onChangeFontSize: (token: ChakraToken, fontSizeChanged: number) => void;
}

export default function FontSize({
  label,
  fontSizeChanged,
  onChangeFontSize,
}: FontSizeProps) {
  const { currentToken } = useCurrentTokenSelector();
  const [fontSize, setFontSize] = useState<number>(
    fontSizeChanged[currentToken]
  );

  console.log(fontSizeChanged, currentToken, fontSize);

  function onChangeSize(size: number) {
    onChangeFontSize(currentToken, size);
    setFontSize(size);
  }

  useEffect(() => {
    setFontSize(fontSizeChanged[currentToken]);
  }, [currentToken]);

  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 4"}>
        <SliderMarkTemplate
          min={12}
          max={72}
          step={1}
          onChangeSlider={onChangeSize}
          ariaLabel="Change font size"
          sliderValue={fontSize}
        />
      </Box>
      <FontSizePreview size={fontSize} />
    </PropertyWrapper>
  );
}
