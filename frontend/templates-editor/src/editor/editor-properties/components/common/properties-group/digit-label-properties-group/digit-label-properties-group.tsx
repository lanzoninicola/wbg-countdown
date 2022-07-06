import { useTranslation } from "react-i18next";

import useCurrentTokenSelector from "../../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import {
  ThemeDigitsLabelContextData,
  ThemeDigitsLabelContextSetter,
} from "../../../../../../countdown-provider/types/theme/timer";
import FontColor from "../../font-color/font-color";
import FontFamily from "../../font-family/font-family";
import FontSize from "../../font-size/font-size";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";
import UnitsLanguages from "./units-languages/units-languages";

interface DigitLabelPropertiesGroupProps {
  themeDigitLabel: ThemeDigitsLabelContextData & ThemeDigitsLabelContextSetter;
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function DigitLabelPropertiesGroup({
  themeDigitLabel,
  showGroupTitle,
  ...props
}: DigitLabelPropertiesGroupProps) {
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.digitLabel.groupTitle")}
      {...props}
    >
      <UnitsLanguages />
      <FontFamily
        label={t("editor.propertiesGroup.digitLabel.labelFont")}
        fontFamily={themeDigitLabel.labelFontFamily}
        fontWeight={themeDigitLabel.labelFontWeight}
        onSelectFontFamily={themeDigitLabel.setLabelFontFamily}
        onSelectFontWeight={themeDigitLabel.setLabelFontWeight}
      />
      <FontSize
        label={t("editor.propertiesGroup.digitLabel.labelSize")}
        fontSizeChanged={themeDigitLabel.labelFontSize}
        onChangeFontSize={themeDigitLabel.setLabelFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.digitLabel.labelColor")}
        colorSelected={themeDigitLabel.labelFontColor}
        onColorSelected={themeDigitLabel.setLabelFontColor}
      />
    </PropertyGroupWrapper>
  );
}
