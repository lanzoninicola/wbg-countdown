import { useTranslation } from "react-i18next";

import useThemeTimerSelector from "../../../../countdown-provider/hooks/theme/useThemeTimerSelector";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../components/common/font-color/font-color";
import FontFamily from "../../components/common/font-family/font-family";
import FontSize from "../../components/common/font-size/font-size";
import UnitsVisible from "./units-visible/units-visible";

interface DigitsPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function DigitsPropertiesGroup({
  showGroupTitle,
  ...props
}: DigitsPropertiesGroupProps) {
  const { t } = useTranslation();
  const {
    digitFontColor,
    digitFontFamily,
    digitFontSize,
    digitFontWeight,
    unitsShown,
    setDigitFontColor,
    setDigitFontFamily,
    setDigitFontSize,
    setDigitFontWeight,
    setUnitsShown,
  } = useThemeTimerSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.digits.groupTitle")}
      {...props}
    >
      <FontFamily
        label={t("editor.propertiesGroup.digits.digitsFont")}
        fontFamily={digitFontFamily}
        fontWeight={digitFontWeight}
        onSelectFontFamily={setDigitFontFamily}
        onSelectFontWeight={setDigitFontWeight}
      />
      <FontSize
        label={t("editor.propertiesGroup.digits.digitsSize")}
        fontSizeChanged={digitFontSize}
        onChangeFontSize={setDigitFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.digits.digitsColor")}
        colorSelected={digitFontColor}
        onColorSelected={setDigitFontColor}
      />
      <UnitsVisible
        unitsShown={unitsShown}
        onUnitsShownChange={setUnitsShown}
      />
    </PropertyGroupWrapper>
  );
}
