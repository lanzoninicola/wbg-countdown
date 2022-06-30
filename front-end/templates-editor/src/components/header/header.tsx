import { Box, Button, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

import useSettingsContextReset from "../../countdown-provider/hooks/settings/useSettingsContextReset";
import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import useThemeContextReset from "../../countdown-provider/hooks/theme/useThemeContextReset";
import EditorSave from "../../editor/components/editor-save/editor-save";
import ButtonClose from "../../editor/layout/button-close/button-close";
import { Languages } from "../../i18n/types";
import useAppContextReset from "../../countdown-provider/hooks/app/useAppContextReset";
import Logo from "../logo/logo";
import LanguagesBar from "../language-bar/languages-bar";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
};

export default function Header() {
  const { t } = useTranslation();
  const { currentCountdown } = useCurrentCountdownSelector();
  const { resetSettingsContext } = useSettingsContextReset();
  const { resetAppContext } = useAppContextReset();
  const { resetThemeContext } = useThemeContextReset();

  const isEditorShown = currentCountdown !== null;

  return (
    <Grid
      gridTemplateColumns={"300px 1fr 300px"}
      paddingInline="1rem"
      alignItems={"center"}
      minH="50px"
    >
      <Logo />
      <Box>
        <HStack justifyContent={"space-between"}>
          <LanguagesBar languages={lngs} />
          {isEditorShown && <EditorSave currentCountdown={currentCountdown} />}
        </HStack>
      </Box>
      <Flex justifyContent={"flex-end"}>
        {isEditorShown && (
          <ButtonClose
            label={t("editor.close")}
            onClick={() => {
              resetAppContext();
              resetSettingsContext();
              resetThemeContext();
            }}
          />
        )}
      </Flex>
    </Grid>
  );
}
