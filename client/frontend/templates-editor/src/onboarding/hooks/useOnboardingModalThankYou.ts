import { useDisclosure } from "@chakra-ui/react";

export default function useOnboardingModalThankYou() {
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return {
    isModalOpen,
    onOpenModal,
    onCloseModal,
  };
}
