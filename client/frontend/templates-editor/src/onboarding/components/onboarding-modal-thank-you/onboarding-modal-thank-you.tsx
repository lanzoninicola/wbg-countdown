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
import { EditorSave } from "../../../editor/components";

import Heeading from "../../../global/common/layout/heeading/heeading";
import thankyou from "../../assets/images/thank-you.png";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import useOnboardingModalThankYou from "../../hooks/useOnboardingModalThankYou";
import OnboardingForm from "../onboarding-form/onboarding-form";

interface OnboardingModalThankYouProps {
  /** The button component that will open the modal */
  children: React.ReactElement;
}

export default function OnboardingModalThankYou({
  children,
}: OnboardingModalThankYouProps) {
  const { isModalOpen, onOpenModal, onCloseModal } =
    useOnboardingModalThankYou();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

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
                bgImage={`url(${thankyou})`}
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
                <EditorSave />
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
