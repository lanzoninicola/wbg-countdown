import { Box, Checkbox } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function BackgroundTransparentSelector() {
  const { t } = useTranslation();

  const { transparentBackground, setTransparentBackground } =
    useThemeLayoutSelector();

  function onBackgroundTransparentCheck(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setTransparentBackground(e.target.checked);
  }

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.layout.transparentProp")}</Label>
      <Box gridColumn={"2 / 4"}>
        <Checkbox
          className="theme-font"
          size="md"
          verticalAlign={"baseline"}
          onChange={onBackgroundTransparentCheck}
          isChecked={transparentBackground}
        />
      </Box>
    </PropertyWrapper>
  );
}
