import { Box, Grid, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ModalNewCountdown } from "../../countdowns/components";
import { EditorSave } from "../../editor/components";
import { Languages } from "../../i18n/types";
import { PremiumFeatureGuard } from "../../premium-features";
import { LanguagesBar, Logo } from "../common";
import HtmlEmbeddedCode from "../../editor/html-embedded-code/html-embedded-code";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
  es: { nativeName: "Español" },
  it: { nativeName: "Italiano" },
};

export default function Header() {
  const { t } = useTranslation();

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
            <PremiumFeatureGuard
              variant="modal"
              customText={t("premiumFeatures.modal.body.newCountdown", {
                maxCountdowns: "one",
              })}
              ctaVariant={4}
            >
              <ModalNewCountdown />
            </PremiumFeatureGuard>
          </HStack>
          <HStack spacing={4}>
            <HtmlEmbeddedCode />
            <PremiumFeatureGuard variant="modal">
              <EditorSave />
            </PremiumFeatureGuard>
          </HStack>
        </HStack>
      </Box>
    </Grid>
  );
}
