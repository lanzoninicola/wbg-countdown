import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { BiCode } from "@react-icons/all-files/bi/BiCode";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import useIsPremiumInstallation from "../../../../premium-features/hooks/useIsPremiumInstallation";
import BoxRadiusLg from "../../../layout/box-radius-lg/box-radius-lg";
import useHtmlCode from "../../hooks/useHtmlCode";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";

export default function HtmlEmbeddedCodeInput() {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const isPremium = useIsPremiumInstallation();
  const htmlCode = useHtmlCode();

  return (
    <VStack gap={4} w={"100%"} position="absolute" bottom={"5rem"} zIndex={30}>
      {isOpen && <HtmlEmbeddedCodeForm htmlCode={htmlCode} />}

      <Button
        onClick={onToggle}
        leftIcon={<BiCode />}
        variant={isPremium ? "outline" : "solid"}
        className="theme-font"
        size={"lg"}
        colorScheme={"yellow"}
        fontSize={"x-large"}
      >
        {isOpen
          ? t("global.htmlEmbeddedCode.hideCode").capitalize()
          : t("global.htmlEmbeddedCode.buttonLabel")}
      </Button>
    </VStack>
  );
}
