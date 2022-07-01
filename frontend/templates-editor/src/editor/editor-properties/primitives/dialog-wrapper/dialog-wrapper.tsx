import { Flex, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useElementPosition from "../../../../hooks/useElementPosition";

interface DialogWrapperProps {
  callerRef: React.RefObject<HTMLElement>;
  onCloseDialog: () => void;
  children: React.ReactNode;
}

export default function DialogWrapper({
  callerRef,
  onCloseDialog,
  children,
}: DialogWrapperProps) {
  const { t } = useTranslation();
  let callerPosition = useElementPosition(callerRef);

  return (
    <Flex
      className="font-selector-dialog"
      role="dialog"
      flexDirection={"column"}
      borderRadius={"lg"}
      boxShadow={"lg"}
      p={3}
      position={"absolute"}
      top={callerPosition.top}
      left={callerPosition.left}
      bottom={callerPosition.bottom}
      maxH="350px"
      bg="white"
      zIndex={99}
    >
      {children}
      <Button size="xs" className="theme-font" onClick={onCloseDialog} mt={4}>
        {t("global.save").capitalize()}
      </Button>
    </Flex>
  );
}
