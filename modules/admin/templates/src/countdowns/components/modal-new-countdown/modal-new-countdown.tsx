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
import { useTranslation } from "react-i18next";
import useSWR, { useSWRConfig } from "swr";

import useCurrentCountdownSelector from "../../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import { COUNTDOWNS_REST_API_ENDPOINTS } from "../../../countdown-rest-api/constants/countdowns/endpoints";
import { create as createCountdownRecord } from "../../../countdown-rest-api/services/countdowns";
import { create as createCountdownSettingsRecord } from "../../../countdown-rest-api/services/editor";
import { APIResponse } from "../../../countdown-rest-api/types";
import {
  CountdownModel,
  StringOrNumber,
} from "../../../countdown-widget/types";
import useNotifications from "../../../hooks/useNotification";
import NewForm from "./new-form/new-form";

export default function ModalNewCountdown() {
  const [name, setName] = useState<CountdownModel["name"]>("");
  const [description, setDescription] =
    useState<CountdownModel["description"]>("");
  const [isSuspense, setIsSuspense] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  const initialRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { successWithButton: successNotification, error: errorNotification } =
    useNotifications();

  const { setCurrentCountdown } = useCurrentCountdownSelector();

  const { mutate } = useSWRConfig();

  // TODO: refactor this chain
  function createCountdown() {
    setIsSuspense(true);
    createCountdownRecord({ name, description })
      .then((response) => {
        createCountdownSettings(response);
      })
      .catch((e) => {
        setIsSuspense(false);
        errorNotification(t("global.error"), {
          title: t("global.errorTitle"),
        });
      });
  }

  function createCountdownSettings(
    response: APIResponse<{
      id: StringOrNumber;
    }>
  ) {
    if (!response.data.payload) {
      return;
    }

    const { id } = JSON.parse(JSON.stringify(response.data.payload));

    createCountdownSettingsRecord(id).then((res) => {
      setIsSuspense(false);
      onClose();

      successNotification(t("countdown_edit_new.createSuccess"), {
        title: t("countdown_edit_new.createSuccessTitle"),
        buttonProps: {
          children: t("countdown_edit_new.openEditor"),
          onClick: () => setCurrentCountdown(id),
        },
      });

      mutate(COUNTDOWNS_REST_API_ENDPOINTS.create.endpoint());
    });
  }

  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme={"blue"}>
        {t("countdown_edit_new.buttonLabel")}
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader className="theme-font">
            {t("countdown_edit_new.header")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <NewForm
              initialFocusRef={initialRef}
              onNameChange={setName}
              onDescriptionChange={setDescription}
              isSuspense={isSuspense}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isSuspense}
              loadingText={t("global.saving").capitalize()}
              className="theme-font"
              colorScheme="blue"
              size={"sm"}
              onClick={() => createCountdown()}
            >
              {t("global.save").capitalize()}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
