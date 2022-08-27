import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { cloneElement, useRef } from "react";
import { useTranslation } from "react-i18next";

import Heeading from "../../../global/common/layout/heeading/heeading";
import error from "../../assets/images/error.png";
import steppingUp from "../../assets/images/stepping-up.png";
import thankyou from "../../assets/images/thank-you.png";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import FormSubmitButton from "../onboarding-form/form-submit-button/form-submit-button";
import OnboardingForm from "../onboarding-form/onboarding-form";
import ModalImage from "./modal-image/modal-image";

interface OnboardingModalProps {
  /** The button component that will open the modal */
  children?: React.ReactElement;
  /** Different configuration of the modal */
  config: "onboardingForm" | "success" | "failed";
  /** Component to render on the modal body. if undefined it renders the form to proceed to onboarding the user */
  body?: React.ReactElement;
}

/**
 * The onboarding modal is a modal that is used to onboard a user to the site.
 *
 * @param children the button component that will open the modal. The onOpenModal is passed via React.cloneElement()
 */
export default function OnboardingModal({
  children,
  config,
  body,
}: OnboardingModalProps) {
  const { isModalOpen, onOpenModal, onCloseModal } = useOnboardingModalForm();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const configs = {
    onboardingForm: {
      title: t("onboarding.title"),
      subtitle: t("onboarding.subtitle"),
      image: steppingUp,
      body: <OnboardingForm />,
      footer: <FormSubmitButton />,
    },
    success: {
      title: t("onboarding.success.title"),
      subtitle: t("onboarding.success.subtitle"),
      image: thankyou,
      body: null,
      footer: null,
    },
    failed: {
      title: t("onboarding.failed.title"),
      subtitle: t("onboarding.failed.subtitle"),
      image: error,
      body: null,
      footer: null,
    },
  };

  return (
    <>
      {children && cloneElement(children, { onClick: onOpenModal })}

      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isModalOpen}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        blockScrollOnMount={true}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">
            {configs[config].title}
          </ModalHeader>
          <ModalBody>
            <HStack spacing={8}>
              <Box flex={1}>
                <ModalImage image={configs[config].image} />
              </Box>

              <VStack spacing={8} alignItems={"flex-start"} flex={1}>
                <Heeading as="h2" fontSize={"md"}>
                  {configs[config].subtitle}
                </Heeading>
                {body || configs[config].body}
              </VStack>
            </HStack>
          </ModalBody>

          <ModalFooter>{configs[config].footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
