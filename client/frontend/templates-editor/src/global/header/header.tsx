import { Box, Grid, HStack } from "@chakra-ui/react";

import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import ModalNewCountdown from "../../countdowns/components/modal-new-countdown/modal-new-countdown";
import EditorSave from "../../editor/components/editor-save/editor-save";
import { Languages } from "../../i18n/types";
import { OnboardingProvider, useOnboardingStatus } from "../../onboarding";
import OnboardingModalForm from "../../onboarding/components/onboarding-modal-form/onboarding-modal-form";
import LanguagesBar from "../common/language-bar/languages-bar";
import Logo from "../common/logo/logo";
import ShortcodePreview from "../common/shortcode-preview/shortcode-preview";

//TODO: detect language from Wordpress
const lngs: Languages = {
  en: { nativeName: "English" },
  pt: { nativeName: "Português" },
  es: { nativeName: "Español" },
  it: { nativeName: "Italiano" },
};

export default function Header() {
  const { currentCountdown } = useCurrentCountdownSelector();
  const { status: onboardingStatus } = useOnboardingStatus();

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
            <ModalNewCountdown />
          </HStack>
          <HStack spacing={4}>
            {currentCountdown && (
              <ShortcodePreview countdownId={currentCountdown} />
            )}
            {currentCountdown &&
              (onboardingStatus === "pending" ? (
                <OnboardingModalForm />
              ) : (
                <EditorSave currentCountdown={currentCountdown} />
              ))}
          </HStack>
        </HStack>
      </Box>
    </Grid>
  );
}
