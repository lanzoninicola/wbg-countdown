import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { cloneElement, useRef } from "react";
import { useTranslation } from "react-i18next";

import Heeading from "../../../global/common/layout/heeading/heeading";
import Teext from "../../../global/common/layout/teext/teext";
import error from "../../assets/images/error.png";
import steppingUp from "../../assets/images/stepping-up.png";
import thankyou from "../../assets/images/thank-you.png";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import useOnboardingContext from "../../provider/hooks/useOnboardingContext";
import OnboardingSubmitButton from "../onboarding-submit-button/onboarding-submit-button";
import OnboardingForm from "../onboarding-form/onboarding-form";
import ModalImage from "./modal-image/modal-image";

interface OnboardingModalProps {
  /** The button component that will open the modal */
  children?: React.ReactElement;
  /** Component to render on the modal body. if undefined it renders the form to proceed to onboarding the user */
  customBody?: React.ReactElement;
}

/**
 * The onboarding modal is a modal that is used to onboard a user to the site.
 *
 * This modal can wrap any component. When the component is clicked the modal will open.
 */
export default function OnboardingModal({
  children,
  customBody,
}: OnboardingModalProps) {
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { status, formState, dispatch } = useOnboardingContext();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const configs = {
    idle: {
      title: t("onboarding.title"),
      subtitle: t("onboarding.subtitle"),
      image: steppingUp,
      body: <OnboardingForm />,
      footer: <OnboardingSubmitButton />,
    },
    success: {
      title: t("onboarding.success.title"),
      subtitle: t("onboarding.success.subtitle"),
      image: thankyou,
      body: null,
      footer: (
        <OnboardingSubmitButton
          label={t("onboarding.success.submitButtonLabel")}
          onClick={onCloseModal}
        />
      ),
    },
    failed: {
      title: t("onboarding.failed.title"),
      subtitle: t("onboarding.failed.subtitle"),
      image: error,
      body: (
        <Teext fontSize={"small"} color="red.600">
          {formState.error}
        </Teext>
      ),
      footer: (
        <OnboardingSubmitButton
          label={t("onboarding.failed.submitButtonLabel")}
        />
      ),
    },
  };

  function getConfig() {
    if (formState.isError) {
      return configs.failed;
    }

    if (formState.isSuccessful) {
      return configs.success;
    }

    return configs.idle;
  }

  if (status === "completed") {
    return children;
  }

  return (
    <>
      <div
        data-role={"modal-children-wrapper"}
        onClickCapture={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          onOpenModal();
          dispatch({ type: "ONBOARDING_SHOW_MODAL" });
        }}
      >
        {children}
      </div>

      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isModalOpen}
        onClose={() => {
          onCloseModal();
          dispatch({ type: "ONBOARDING_HIDE_MODAL" });
        }}
        closeOnOverlayClick={formState.isSuccessful ? true : false}
        blockScrollOnMount={true}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">{getConfig().title}</ModalHeader>
          {formState.isSuccessful && <ModalCloseButton />}
          <ModalBody>
            <HStack spacing={8}>
              <Box flex={1}>
                <ModalImage image={getConfig().image} />
              </Box>

              <VStack spacing={8} alignItems={"flex-start"} flex={1}>
                <Heeading as="h2" fontSize={"md"} lineHeight={1.3}>
                  {getConfig().subtitle}
                </Heeading>
                {customBody || getConfig().body}
              </VStack>
            </HStack>
          </ModalBody>

          <ModalFooter>{getConfig().footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
