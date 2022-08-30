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

import Heeading from "../../../global/common/layout/heeading/heeading";
import useOnboardingModalForm from "../../hooks/useOnboardingModalForm";
import ModalImage from "./modal-image/modal-image";

interface OnboardingModalProps {
  title: string;
  subtitle: string;
  image: string;
  /** Component to render on the modal body. if undefined it renders the form to proceed to onboarding the user */
  body?: React.ReactElement | null;
  footer?: React.ReactElement | null;
}

export default function OnboardingModalView({
  title,
  subtitle,
  image,
  body,
  footer,
}: OnboardingModalProps) {
  const { isModalOpen, onCloseModal } = useOnboardingModalForm();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  console.log(isModalOpen);

  return (
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
        <ModalHeader className="theme-font">{title}</ModalHeader>
        <ModalBody>
          <HStack spacing={8}>
            <Box flex={1}>
              <ModalImage image={image} />
            </Box>

            {body ? (
              <VStack spacing={8} alignItems={"flex-start"} flex={1}>
                <Heeading as="h2" fontSize={"md"}>
                  {subtitle}
                </Heeading>
                {body}
              </VStack>
            ) : (
              <Heeading as="h2" fontSize={"md"}>
                {subtitle}
              </Heeading>
            )}
          </HStack>
        </ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
