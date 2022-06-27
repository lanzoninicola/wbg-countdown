import { Box, Flex, HStack, VStack } from "@chakra-ui/react";

import useCurrentTokenSelector from "../../countdown-provider/hooks/app/useCurrentTokenSelector";
import { Tokens } from "../../countdown-provider/types/theme/responsive";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import useCustomScrollbar from "../../hooks/useCustomScrollbar";
import BoxRadiusLg from "../layout/box-radius-lg/box-radius-lg";
import pattern from "./assets/imgs/tiny-checkers.svg";
import BreakpointInfoMessage from "./components/breakpoint-info-message/breakpoint-info-message";
import BreakpointsBar from "./components/breakpoints-bar/breakpoints-bar";
import PreviewWrapper from "./components/preview-wrapper/preview-wrapper";
import DEFAULT_BREAKPOINTS from "./constants/default-breakpoints";

export default function EditorPreview() {
  const { currentToken, setCurrentToken } = useCurrentTokenSelector();

  return (
    <>
      <Box
        bgImage={`url(${pattern})`}
        bgSize={"20px 20px"}
        bgColor={"gray.50"}
        p="5rem"
        borderRadius={"xl"}
        boxShadow={"sm"}
      >
        <PreviewWrapper currentToken={currentToken}>
          <CountdownWidget />
        </PreviewWrapper>
      </Box>

      <VStack spacing={2}>
        <BreakpointInfoMessage />
        <BreakpointsBar
          onClickDesktop={() => setCurrentToken("lg")}
          onClickMobile={() => setCurrentToken("sm")}
          onClickTablet={() => setCurrentToken("md")}
        />
      </VStack>
    </>
  );
}
