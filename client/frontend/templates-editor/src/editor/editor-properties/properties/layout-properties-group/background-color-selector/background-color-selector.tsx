import { Box, Checkbox } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";
import BackgroundColor from "../../../components/common/background-color/background-color";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function BackgroundColorSelector() {
  const { t } = useTranslation();

  const { backgroundColor, setBackgroundColor } = useThemeLayoutSelector();

  return (
    <BackgroundColor
      colorSelected={backgroundColor}
      onColorSelected={setBackgroundColor}
      label={t("editor.propertiesGroup.layout.backgroundColorProp")}
    />
  );
}
