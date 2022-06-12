import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Box, Flex, Text } from "@chakra-ui/react";

import { CountdownTimerProvider } from "./components/countdown-timer/context/countdow-timer-context";
import CountdownTimer from "./components/countdown-timer/countdown-timer";
import PropertyEditor from "./components/editor/PropertyEditor";
import CenterContent from "./components/layout/center-content/center-content";
import LeftSidebar from "./components/layout/left-sidebar/left-sidebar";
import MainContent from "./components/layout/main-content/main-content";
import RightSidebar from "./components/layout/right-sidebar/right-sidebar";

function App() {
  return (
    <MainContent>
      <Box>
        <Text>This is the Header</Text>
      </Box>
      <Flex id="editor-wrapper" h="100%" w="100%">
        <LeftSidebar>
          <PropertyEditor />
        </LeftSidebar>
        <CenterContent>
          <Text>This is the top side</Text>
          <CountdownTimerProvider>
            <CountdownTimer />
          </CountdownTimerProvider>
        </CenterContent>
        <RightSidebar>
          <Text>This is the countdown theme area</Text>
        </RightSidebar>
      </Flex>
    </MainContent>
  );
}

export default App;
