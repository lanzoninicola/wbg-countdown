import { Box, Divider } from "@chakra-ui/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import useCurrentTokenSelector from "../../countdown-provider/hooks/app/useCurrentTokenSelector";
import useThemeTimerSelector from "../../countdown-provider/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../../countdown-provider/hooks/theme/useThemeTitleSelector";
import CountdownTitleText from "./components/countdown-title-text/countdown-title-text";
import FontColor from "./components/font-color/font-color";
import FontFamily from "./components/font-family/font-family";
import FontSize from "./components/font-size/font-size";
import SeparatorChar from "./components/separator-char/separator-char";
import ShowSeparator from "./components/show-separator/show-separator";
import UnitsLanguages from "./components/units-languages/units-languages";
import GroupTitle from "./layout/group-title/group-title";
import PropertyGroupWrapper from "./layout/property-group-wrapper/property-group-wrapper";

export default function EditorProperties() {
  const { t } = useTranslation();

  const title = useThemeTitleSelector();
  const timer = useThemeTimerSelector();
  const { currentToken } = useCurrentTokenSelector();

  return (
    <Box paddingInline={".25rem"}>
      <PropertyGroupWrapper>
        <GroupTitle>{t("editor.titleStyle")}</GroupTitle>
        <CountdownTitleText />
        <FontFamily
          label={t("editor.textFont")}
          fontFamily={title.fontFamily}
          fontWeight={title.fontWeight}
          onSelectFontFamily={title.setFontFamily}
          onSelectFontWeight={title.setFontWeight}
        />

        <FontSize
          label={t("editor.textSize")}
          fontSizeSelected={title.fontSize[currentToken]}
          onFontSizeSelected={title.setFontSize}
        />
        <FontColor
          label={t("editor.textColor")}
          colorSelected={title.fontColor}
          onColorSelected={title.setFontColor}
        />
      </PropertyGroupWrapper>
      <Divider marginBlock={".5rem"} />
      <PropertyGroupWrapper>
        <GroupTitle>{t("editor.countdownStyle")}</GroupTitle>

        {/* <Units
          unitsShown={timer.unitsShown}
          onChangeUnitsShown={timer.setUnitsShown}
        /> */}

        <Divider marginBlock={".5rem"} />

        <ShowSeparator
          showSeparator={timer.showSeparator}
          onChangeShowSeparator={timer.setShowSeparator}
        />
        <SeparatorChar
          showSeparator={timer.showSeparator}
          separatorChar={timer.separatorChar}
          onChangeSeparatorChar={timer.setSeparatorChar}
        />

        <Divider marginBlock={".5rem"} />

        <FontColor
          label={t("editor.lastUnitColor")}
          colorSelected={timer.lastUnitColor}
          onColorSelected={timer.setLastUnitColor}
        />

        <Divider marginBlock={".5rem"} />

        <FontFamily
          label={t("editor.digitsFont")}
          fontFamily={timer.digitFontFamily}
          fontWeight={timer.digitFontWeight}
          onSelectFontFamily={timer.setDigitFontFamily}
          onSelectFontWeight={timer.setDigitFontWeight}
        />
        <FontSize
          label={t("editor.digitsSize")}
          fontSizeSelected={timer.digitFontSize[currentToken]}
          onFontSizeSelected={timer.setDigitFontSize}
        />
        <FontColor
          label={t("editor.digitsColor")}
          colorSelected={timer.digitFontColor}
          onColorSelected={timer.setDigitFontColor}
        />

        <Divider marginBlock={".5rem"} />

        <UnitsLanguages />

        <FontFamily
          label={t("editor.labelFont")}
          fontFamily={timer.labelFontFamily}
          fontWeight={timer.labelFontWeight}
          onSelectFontFamily={timer.setLabelFontFamily}
          onSelectFontWeight={timer.setLabelFontWeight}
        />
        <FontSize
          label={t("editor.labelSize")}
          fontSizeSelected={timer.labelFontSize[currentToken]}
          onFontSizeSelected={timer.setLabelFontSize}
          max={3}
        />
        <FontColor
          label={t("editor.labelColor")}
          colorSelected={timer.labelFontColor}
          onColorSelected={timer.setLabelFontColor}
        />
      </PropertyGroupWrapper>
    </Box>
  );
}
