import { useTranslation } from "react-i18next";

import useThemeTimerSelector from "../../../../../../countdown-provider/hooks/theme/useThemeTimerSelector";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../font-color/font-color";
import FontFamily from "../../font-family/font-family";
import FontSize from "../../font-size/font-size";
import UnitsLanguages from "./units-languages/units-languages";

interface DigitLabelPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function DigitLabelPropertiesGroup({
  showGroupTitle,
  ...props
}: DigitLabelPropertiesGroupProps) {
  const { t } = useTranslation();
  const {
    labelFontFamily,
    setLabelFontFamily,
    labelFontWeight,
    setLabelFontWeight,
    labelFontSize,
    setLabelFontSize,
    labelFontColor,
    setLabelFontColor,
  } = useThemeTimerSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.digitLabel.groupTitle")}
      {...props}
    >
      <UnitsLanguages />
      <FontFamily
        label={t("editor.propertiesGroup.digitLabel.labelFont")}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        onSelectFontFamily={setLabelFontFamily}
        onSelectFontWeight={setLabelFontWeight}
      />
      <FontSize
        label={t("editor.propertiesGroup.digitLabel.labelSize")}
        fontSizeChanged={labelFontSize}
        onChangeFontSize={setLabelFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.digitLabel.labelColor")}
        colorSelected={labelFontColor}
        onColorSelected={setLabelFontColor}
      />
    </PropertyGroupWrapper>
  );
}
