import { Box, VStack } from "@chakra-ui/react";

import useAppContext from "../../countdown-provider/hooks/app/useAppContext";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import pattern from "./assets/imgs/tiny-checkers.png";
import BreakpointInfoMessage from "./components/breakpoint-info-message/breakpoint-info-message";
import BreakpointsBar from "./components/breakpoints-bar/breakpoints-bar";
import Preview from "./components/preview/preview";

// TODO: (Reducers) need to refactor
export default function EditorPreview() {
  const { currentToken } = useAppContext();

  return (
    <>
      <Box
        bgImage={`url(${pattern})`}
        bgSize={"20px 20px"}
        bgColor={"gray.50"}
        p="5rem"
        borderRadius={"xl"}
        boxShadow={"sm"}
        position="relative"
      >
        <Preview currentToken={currentToken}>
          <CountdownWidget />
        </Preview>
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
