import { Box, Button, Flex, FlexProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useElementPosition from "../../../../hooks/useElementPosition";

interface DialogWrapperProps {
  /** The element ref that requested the dialog */
  callerRef: React.RefObject<HTMLElement> | undefined | null;
  /** If true the dialog is visible */
  isOpen?: boolean;
  /** Show a regular button to close the dialog */
  showCloseButton?: boolean;
  /** The label of close button */
  closeButtonLabel?: string;
  /** The fn() attached to the close button if shown */
  onCloseDialog?: () => void;
  /** Add offset to the current position */
  offset?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  /** Add border colored to the top of Dialog */
  borderTopColor?: FlexProps["borderTopColor"];
  /** Childrens */
  children: React.ReactNode;
  minWidth?: string;
  minW?: string;
}

export default function DialogWrapper({
  callerRef,
  isOpen = false,
  showCloseButton = true,
  closeButtonLabel,
  onCloseDialog,
  offset,
  borderTopColor,
  children,
  minWidth,
  minW,
}: DialogWrapperProps) {
  const { t } = useTranslation();
  let callerPosition = useElementPosition(callerRef);

  const { top, right, bottom, left } = callerPosition;

  const topPosition = top !== "auto" ? (offset?.top ?? 0) + Number(top) : top;
  const leftPosition =
    left !== "auto" ? (offset?.left ?? 0) + Number(left) : left;
  const bottomPosition =
    bottom !== "auto" ? (offset?.bottom ?? 0) + Number(bottom) : bottom;
  const rightPosition =
    right !== "auto" ? (offset?.right ?? 0) + Number(right) : right;

  return (
    <>
      <Flex
        role="dialog"
        flexDirection={"column"}
        h="max-content"
        maxH="350px"
        minW={minWidth || minW}
        bg="white"
        position={"absolute"}
        top={topPosition}
        left={leftPosition}
        bottom={bottomPosition}
        right={rightPosition}
        zIndex={99}
        borderBottomLeftRadius={"lg"}
        borderBottomRightRadius={"lg"}
        borderTop={borderTopColor && "5px solid"}
        borderTopColor={borderTopColor && "blue.500"}
        boxShadow={"lg"}
        transition="all 0.2s ease-in-out"
      >
        <Box p={3}>
          {children}
          {showCloseButton && (
            <Button
              size="xs"
              className="theme-font"
              onClick={onCloseDialog}
              mt={4}
              w="100%"
            >
              {closeButtonLabel || t("global.close").capitalize()}
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
}
