import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { cloneElement, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Heeading from "../../../global/common/layout/heeading/heeading";
import steppingUp from "../../assets/images/stepping-up.png";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import OnboardingForm from "../onboarding-form/onboarding-form";

interface OnboardingModalProps {
  /** The button component that will open the modal */
  children: React.ReactElement;
}

/**
 * The onboarding modal is a modal that is used to onboard a user to the site.
 *
 * @param children the button component that will open the modal. The onOpenModal is passed via React.cloneElement()
 */
export default function OnboardingModal({ children }: OnboardingModalProps) {
  const { formState, handleSubmit, isModalOpen, onOpenModal, onCloseModal } =
    useOnboardingModalForm();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { fullname, email, consent_terms, consent_privacy } = formState;

  return (
    <>
      {cloneElement(children, { onClick: onOpenModal })}

      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isModalOpen}
        onClose={onCloseModal}
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
