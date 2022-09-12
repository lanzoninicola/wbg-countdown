import { Box, Flex, VStack } from "@chakra-ui/react";

import useAppSelector from "../../countdown-state-management/hooks/app/useAppSelector";
import CountdownWidget from "../../countdown-widget/countdown-widget";
import HtmlEmbeddedCode from "../html-embedded-code/html-embedded-code";
import BoxRadiusLg from "../layout/box-radius-lg/box-radius-lg";
import LaptopVector from "./components/laptop-vector/laptop-vector";
import MobileVector from "./components/mobile-vector/mobile-vector";
import Preview from "./components/preview/preview";
import TabletVector from "./components/tablet-vector/tablet-vector";
import DEFAULT_BREAKPOINTS from "./constants/default-breakpoints";

export default function EditorPreview() {
  const { currentToken } = useAppSelector();

  return (
    <VStack position="relative" w={"100%"} data-element="editor-preview">
      <Preview currentToken={currentToken}>
        {currentToken === "lg" && <LaptopVector />}
        {currentToken === "md" && <TabletVector />}
        {currentToken === "sm" && <MobileVector />}

        <Flex
          zIndex={10}
          mt={
            currentToken === "lg"
              ? "10rem"
              : currentToken === "md"
              ? "15rem"
              : "10rem"
          }
          width={DEFAULT_BREAKPOINTS[currentToken]}
          justifyContent="center"
        >
          <CountdownWidget />
        </Flex>
      </Preview>

      <HtmlEmbeddedCode />
    </VStack>
  );
}
