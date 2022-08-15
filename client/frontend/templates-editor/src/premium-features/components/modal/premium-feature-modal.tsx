import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import BecomePremiumButton from "../become-premium-button/become-premium-button";

interface PremiumFeatureProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PremiumFeatureModal({
  isOpen,
  onClose,
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
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="theme-font">Become Premium</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <p className="theme-font">dkfaslfdas</p>
          </ModalBody>

          <ModalFooter>
            <BecomePremiumButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
