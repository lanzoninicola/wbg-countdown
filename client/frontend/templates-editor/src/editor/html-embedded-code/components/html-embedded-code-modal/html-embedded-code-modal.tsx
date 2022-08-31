import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useHtmlCode from "../../hooks/useHtmlCode";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";
import { BiCode } from "@react-icons/all-files/bi/BiCode";
import { BiCopy } from "@react-icons/all-files/bi/BiCopy";
import useIsPremiumInstallation from "../../../../premium-features/hooks/useIsPremiumInstallation";

export default function HtmlEmbeddedCodeModal() {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isPremium = useIsPremiumInstallation();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const htmlCode = useHtmlCode();

  function copyShortcode() {
    window.navigator.clipboard.writeText(htmlCode).then(() => {
      setIsCopied(true);
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<BiCode />}
        variant={isPremium ? "outline" : "solid"}
        className="theme-font"
        size="sm"
        colorScheme={"green"}
      >
        {t("global.htmlEmbeddedCode.buttonLabel")}
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("global.htmlEmbeddedCode.modalTitle")}
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} alignItems={"flex-start"}>
              <Text className="theme-font">
                {t("global.htmlEmbeddedCode.modalDescription")}
              </Text>
              <HtmlEmbeddedCodeForm htmlCode={htmlCode} />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              leftIcon={<BiCopy />}
              onClick={() => copyShortcode()}
            >
              {isCopied
                ? t("global.copied").capitalize()
                : t("global.copy").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
