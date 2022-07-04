import { useTranslation } from "react-i18next";

import useCurrentTokenSelector from "../../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import {
  ThemeDigitsContextData,
  ThemeDigitsContextSetter,
} from "../../../../../../countdown-provider/types/theme/timer";

import FontColor from "../../font-color/font-color";
import FontFamily from "../../font-family/font-family";
import FontSize from "../../font-size/font-size";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";

interface DigitsPropertiesGroupProps {
  themeDigits: ThemeDigitsContextData & ThemeDigitsContextSetter;
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function DigitsPropertiesGroup({
  themeDigits,
  showGroupTitle,
  ...props
}: DigitsPropertiesGroupProps) {
  const { t } = useTranslation();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.digits.groupTitle")}
      {...props}
    >
      <FontFamily
        label={t("editor.propertiesGroup.digits.digitsFont")}
        fontFamily={themeDigits.digitFontFamily}
        fontWeight={themeDigits.digitFontWeight}
        onSelectFontFamily={themeDigits.setDigitFontFamily}
        onSelectFontWeight={themeDigits.setDigitFontWeight}
      />
      <FontSize
        label={t("editor.propertiesGroup.digits.digitsSize")}
        fontSizeSelected={themeDigits.digitFontSize[currentToken]}
        onFontSizeSelected={themeDigits.setDigitFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.digits.digitsColor")}
        colorSelected={themeDigits.digitFontColor}
        onColorSelected={themeDigits.setDigitFontColor}
      />
    </PropertyGroupWrapper>
  );
}
