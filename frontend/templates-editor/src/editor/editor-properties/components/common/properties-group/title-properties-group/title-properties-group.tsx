import { useTranslation } from "react-i18next";

import useCurrentTokenSelector from "../../../../../../countdown-provider/hooks/app/useCurrentTokenSelector";
import {
  ThemeTitleContextData,
  ThemeTitleContextSetter,
} from "../../../../../../countdown-provider/types/theme/title";
import CountdownTitleText from "./countdown-title-text/countdown-title-text";
import FontColor from "../../font-color/font-color";
import FontFamily from "../../font-family/font-family";
import FontSize from "../../font-size/font-size";
import PropertyGroupWrapper from "../../../../layout/property-group-wrapper/property-group-wrapper";

interface TitlePropertiesGroupProps {
  themeTitle: ThemeTitleContextData & ThemeTitleContextSetter;
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function TitlePropertiesGroup({
  themeTitle,
  showGroupTitle,
  ...props
}: TitlePropertiesGroupProps) {
  const { t } = useTranslation();
  const { currentToken } = useCurrentTokenSelector();

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
        fontSizeSelected={themeTitle.fontSize[currentToken]}
        onFontSizeSelected={themeTitle.setFontSize}
      />
      <FontColor
        label={t("editor.propertiesGroup.title.textColor")}
        colorSelected={themeTitle.fontColor}
        onColorSelected={themeTitle.setFontColor}
      />
    </PropertyGroupWrapper>
  );
}
