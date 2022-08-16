import { Box, Grid, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import { ModalNewCountdown } from "../../countdowns/components";
import { EditorSave } from "../../editor/components";
import { Languages } from "../../i18n/types";
import { PremiumFeature } from "../../premium-features";
import { Logo, LanguagesBar, ShortcodePreview } from "../common";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
  es: { nativeName: "Español" },
  it: { nativeName: "Italiano" },
};

export default function Header() {
  const { t } = useTranslation();
  const { currentCountdown } = useCurrentCountdownSelector();

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
          <HStack>
            <LanguagesBar languages={lngs} />
            <PremiumFeature
              variant="modal"
              customText={t("premiumFeatures.modal.body.newCountdown", {
                maxCountdowns: "1",
              })}
            >
              <ModalNewCountdown />
            </PremiumFeature>
          </HStack>
          <HStack spacing={4}>
            {currentCountdown && (
              <ShortcodePreview countdownId={currentCountdown!} />
            )}
            {currentCountdown && <EditorSave />}
          </HStack>
        </HStack>
      </Box>
    </Grid>
  );
}
