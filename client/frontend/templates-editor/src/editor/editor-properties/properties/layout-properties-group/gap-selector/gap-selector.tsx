import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";
import SliderMarkTemplate from "../../../components/primitives/slider-mark-template/slider-mark-template";

export default function GapSelector() {
  const { gap, setGap } = useThemeLayoutSelector();
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.layout.gapLabelProp")}</Label>
      <Box gridColumn={"2 / 4"}>
        <SliderMarkTemplate
          min={1}
          max={3}
          step={1}
          onChangeSlider={setGap}
          ariaLabel="Change the gap between the title and timer"
          sliderValue={gap}
        />
      </Box>
    </PropertyWrapper>
  );
}
