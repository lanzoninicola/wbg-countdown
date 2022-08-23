import { useTranslation } from "react-i18next";

import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";
import BackgroundColor from "../../../components/common/background-color/background-color";
import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";

export default function BackgroundColorSelector() {
  const { t } = useTranslation();

  const { backgroundColor, setBackgroundColor } = useThemeLayoutSelector();

  function onBackgroundColorChange(color: string) {
    setBackgroundColor(color);
  }

  return (
    <PropertyWrapper>
      <BackgroundColor
        colorSelected={backgroundColor}
        onColorSelected={onBackgroundColorChange}
        label={t("editor.propertiesGroup.layout.backgroundColorProp")}
      />
    </PropertyWrapper>
  );
}
