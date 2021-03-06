import { useTranslation } from "react-i18next";

import useThemeTimerSelector from "../../../../../../countdown-provider/hooks/theme/useThemeTimerSelector";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../font-color/font-color";
import FontFamily from "../../font-family/font-family";
import FontSize from "../../font-size/font-size";

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
    setDigitFontColor,
    setDigitFontFamily,
    setDigitFontSize,
    setDigitFontWeight,
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
    </PropertyGroupWrapper>
  );
}
