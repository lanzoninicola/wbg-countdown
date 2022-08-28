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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useHtmlCode from "../../hooks/useHtmlCode";
import HtmlEmbeddedCodeForm from "../html-embedded-code-form/html-embedded-code-form";
import { BiCode } from "@react-icons/all-files/bi/BiCode";

export default function HtmlEmbeddedCodeModal() {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Button onClick={onOpen} leftIcon={<BiCode />}>
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
            <HtmlEmbeddedCodeForm htmlCode={htmlCode} />
          </ModalBody>

          <ModalFooter>
            <Button
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
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
