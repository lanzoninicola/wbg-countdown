import { Badge, Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { Tokens } from "../../../../../countdown-provider/types/theme/responsive";
import DEFAULT_BREAKPOINTS from "../../../constants/default-breakpoints";

interface DisplaySizeBar {
  currentToken: Tokens;
}

export default function DisplaySizeBar({ currentToken }: DisplaySizeBar) {
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      borderLeft={"2px solid"}
      borderRight={"2px solid"}
      h="16px"
      alignItems={"center"}
      borderColor={"blue.500"}
      position="relative"
    >
      <Box w="100%" bg="blue.500" h="2px">
        <Flex
          justifyContent={"center"}
          alignItems="center"
          position={"absolute"}
          top="-2px"
          w="100%"
        >
          <Badge
            w="max-content"
            borderRadius={"xl"}
            bg={"blue.500"}
            paddingInline={2}
            color="white"
            className="theme-font"
            fontWeight={500}
          >
            {t("editor.preview.tokenBadge")} {DEFAULT_BREAKPOINTS[currentToken]}
          </Badge>
        </Flex>
      </Box>
    </Flex>
  );
}
