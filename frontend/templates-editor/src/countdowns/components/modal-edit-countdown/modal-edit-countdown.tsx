import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import ButtonEdit from "../../countdowns-table/primitives/button-edit/button-edit";

import EditForm from "./edit-form/edit-form";
import { CountdownModel } from "../../../countdown-widget/types";
import { useTranslation } from "react-i18next";
import useNotifications from "../../../hooks/useNotification";
import { update as updateCountdown } from "../../../countdown-rest-api/services/countdowns";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdown-rest-api/constants/countdowns/endpoints";
import { useSWRConfig } from "swr";

interface ModalEditCountdownProps {
  countdown: CountdownModel;
}

export default function ModalEditCountdown({
  countdown,
}: ModalEditCountdownProps) {
  const [name, setName] = useState<CountdownModel["name"]>(countdown.name);
  const [description, setDescription] = useState<CountdownModel["description"]>(
    countdown.description
  );
  const [isSuspense, setIsSuspense] = useState(false);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { success: successNotification, error: errorNotification } =
    useNotifications();

  const { mutate } = useSWRConfig();

  function updateData() {
    setIsSuspense(true);

    updateCountdown(countdown.id, { name, description })
      .then((res) => {
        setIsSuspense(false);
        onClose();

        successNotification(t("countdown_edit_edit.updateSuccess"), {
          title: t("countdown_edit_edit.updateSuccessTitle"),
        });
      })
      .catch(() => {
        setIsSuspense(false);
        errorNotification(t("global.error"), {
          title: t("global.errorTitle"),
        });
      })
      .finally(() => {
        mutate(COUNTDOWNS_REST_API_ENDPOINTS.findAll.endpoint());
      });
  }

  return (
    <>
      <ButtonEdit label="Edit" onClick={onOpen} />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdown_edit_edit.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <EditForm
              initialFocusRef={initialRef}
              name={name}
              description={description}
              onNameChange={setName}
              onDescriptionChange={setDescription}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isSuspense}
              loadingText={t("global.updating").capitalize()}
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => updateData()}
            >
              {t("global.update").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
