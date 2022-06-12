import { Flex, Button } from "@chakra-ui/react";
import useElementPosition from "../../../hooks/useElementPosition";
import { CallerPosition } from "../types";

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
      maxH="350px"
      bg="white"
      zIndex={99}
    >
      {children}
      <Button
        // w="100%"
        size="xs"
        className="theme-font"
        onClick={onCloseDialog}
        mt={4}
      >
        Close
      </Button>
    </Flex>
  );
}
