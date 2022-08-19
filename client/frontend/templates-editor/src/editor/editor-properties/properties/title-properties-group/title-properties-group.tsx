import { useTranslation } from "react-i18next";

import useThemeTitleSelector from "../../../../countdown-provider/hooks/theme/useThemeTitleSelector";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../components/common/font-color/font-color";
import FontFamily from "../../components/common/font-family/font-family";
import FontSize from "../../components/common/font-size/font-size";
import CountdownTitleText from "./countdown-title-text/countdown-title-text";

interface TitlePropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function TitlePropertiesGroup({
  showGroupTitle,
  ...props
}: TitlePropertiesGroupProps) {
  const { t } = useTranslation();
  const themeTitle = useThemeTitleSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.title.groupTitle")}
      {...props}
    >
      <CountdownTitleText />
      <FontFamily
        label={t("editor.propertiesGroup.title.textFont")}
        fontFamily={themeTitle.fontFamily}
        fontWeight={themeTitle.fontWeight}
        onSelectFontFamily={themeTitle.setFontFamily}
        onSelectFontWeight={themeTitle.setFontWeight}
      />
      <FontSize
        label={t("editor.propertiesGroup.title.textSize")}
        fontSizeChanged={themeTitle.fontSize}
        onChangeFontSize={themeTitle.setFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.title.textColor")}
        colorSelected={themeTitle.fontColor}
        onColorSelected={themeTitle.setFontColor}
      />
    </PropertyGroupWrapper>
  );
}
