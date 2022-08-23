import { Box, Checkbox } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function StretchSelector() {
  const { t } = useTranslation();

  const { setFitOnScreen, fitOnScreen } = useThemeLayoutSelector();

  function onFitOnScreenChecked(e: React.ChangeEvent<HTMLInputElement>) {
    setFitOnScreen(e.target.checked);
  }

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.layout.stretchProp")}</Label>
      <Box gridColumn={"2 / 4"}>
        <Checkbox
          className="theme-font"
          size="md"
          verticalAlign={"baseline"}
          onChange={onFitOnScreenChecked}
          isChecked={fitOnScreen}
        />
      </Box>
    </PropertyWrapper>
  );
}
