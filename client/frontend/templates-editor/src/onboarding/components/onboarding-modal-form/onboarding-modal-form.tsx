import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ButtonSave from "../../../editor/layout/button-save/button-save";
import Heeading from "../../../global/common/layout/heeading/heeading";
import OnboardingForm from "./onboarding-form/onboarding-form";
import { useOnboardingModalForm } from "./useOnboardingModalForm";
import steppingUp from "../../assets/images/stepping-up.png";

export default function OnboardingModalForm() {
  const { formState, handleSubmit } = useOnboardingModalForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { fullname, email, consent_terms, consent_privacy } = formState;

  return (
    <>
      <ButtonSave
        label={t("editor.saveSettings").capitalize()}
        colorScheme={"green"}
        onClick={onOpen}
        loadingText={t("global.saving").capitalize()}
      />

      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        blockScrollOnMount={true}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">
            {t("onboarding.title")}
          </ModalHeader>
          <ModalBody>
            <HStack spacing={4}>
              <Box
                className="onboarding-image"
                bgImage={`url(${steppingUp})`}
                bgSize={"250px"}
                w="600px"
                h="400px"
                bgRepeat={["no-repeat"]}
                bgPosition={["center"]}
              ></Box>
              <VStack spacing={8} alignItems={"flex-start"}>
                <Heeading as="h2" fontSize={"md"}>
                  {t("onboarding.subtitle")}
                </Heeading>
                <OnboardingForm />
              </VStack>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={formState.isLoading}
              isDisabled={
                fullname === "" ||
                email === "" ||
                consent_terms === false ||
                consent_privacy === false
              }
              loadingText={t("global.saving").capitalize()}
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={handleSubmit}
              data-test="onboarding-form-submit"
            >
              {t("onboarding.buttonLabel").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
