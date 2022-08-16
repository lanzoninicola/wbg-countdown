import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import beTheHero from "../../assets/images/be-the-hero.png";
import BecomePremiumButton from "../become-premium-button/become-premium-button";

interface PremiumFeatureProps {
  isOpen: boolean;
  onClose: () => void;
  bodyText: string | React.ReactNode;
}

export default function PremiumFeatureModal({
  isOpen,
  onClose,
  bodyText,
}: PremiumFeatureProps) {
  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">
            {t("premiumFeatures.modal.title")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack gap={8}>
              <img src={beTheHero} alt="upgrade to premium" width={"250px"} />
              <p className="theme-font">{bodyText}</p>
            </VStack>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"}>
            <BecomePremiumButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
