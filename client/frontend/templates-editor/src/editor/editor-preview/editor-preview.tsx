import { Box, VStack } from "@chakra-ui/react";

import useAppSelector from "../../countdown-provider/hooks/app/useAppSelector";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import pattern from "./assets/imgs/tiny-checkers.png";
import BreakpointInfoMessage from "./components/breakpoint-info-message/breakpoint-info-message";
import BreakpointsBar from "./components/breakpoints-bar/breakpoints-bar";
import Preview from "./components/preview/preview";

export default function EditorPreview() {
  const { currentToken, appDispatcher } = useAppSelector();

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
          onClickDesktop={() => {
            appDispatcher({
              type: "APP_EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
              payload: "lg",
            });
          }}
          onClickMobile={() => {
            appDispatcher({
              type: "APP_EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
              payload: "sm",
            });
          }}
          onClickTablet={() => {
            appDispatcher({
              type: "APP_EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
              payload: "md",
            });
          }}
        />
      </VStack>
    </>
  );
}
