import { HStack, Td, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import useAppContext from "../../../../countdown-provider/hooks/app/useAppContext";
import { CountdownModel } from "../../../../countdown-widget/types";
import DeleteModal from "../../../components/modal-delete-countdown/modal-delete-countdown";
import ModalEditCountdown from "../../../components/modal-edit-countdown/modal-edit-countdown";
import ModalShortcode from "../../../components/modal-shortcode/modal-shortcode";
import ButtonSettings from "../../primitives/button-settings/button-settings";
import ButtonShortcode from "../../primitives/button-shortcode/button-shortcode";
import TableCellText from "../../primitives/table-cell-text/table-cell-text";

interface TableRowProps {
  countdown: CountdownModel;
}

//TODO: how to present the Date in the right format?

export default function TableRow({ countdown }: TableRowProps) {
  const { t } = useTranslation();
  const { id, name, description, created_at, updated_at } = countdown;
  const { setCurrentCountdown, setIsEditorMode } = useAppContext();

  const createdAt = dayjs(created_at).format("DD/MM/YYYY");
  const updatedAt = updated_at && dayjs(updated_at).format("DD/MM/YYYY");

  return (
    <Tr>
      <Td maxW="12rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{id}</TableCellText>
      </Td>
      <Td maxW="12rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{name}</TableCellText>
      </Td>
      <Td maxW="30rem" overflow={"hidden"} textOverflow={"ellipsis"}>
        <TableCellText>{description ? description : "..."}</TableCellText>
      </Td>
      <Td>
        <ModalShortcode countdown={countdown} />
      </Td>
      <Td>
        <HStack>
          <ButtonSettings
            label={t("global.customize")}
            onClick={() => {
              setCurrentCountdown(id);
              setIsEditorMode(true);
            }}
          />
          <ModalEditCountdown countdown={countdown} />
          <DeleteModal countdown={countdown} />
        </HStack>
      </Td>
      <Td>
        <TableCellText fontSize={"xs"}>{createdAt}</TableCellText>
      </Td>
      <Td>
        <TableCellText fontSize={"xs"}>{updatedAt}</TableCellText>
      </Td>
    </Tr>
  );
}
