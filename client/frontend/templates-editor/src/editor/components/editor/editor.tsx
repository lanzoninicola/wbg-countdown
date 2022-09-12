import { VStack } from "@chakra-ui/react";
import BreakpointInfoMessage from "../../editor-preview/components/breakpoint-info-message/breakpoint-info-message";
import BreakpointsBar from "../../editor-preview/components/breakpoints-bar/breakpoints-bar";
import EditorPreview from "../../editor-preview/editor-preview";
import PropertiesBar from "../../editor-properties/editor-properties-bar/components/properties-bar/properties-bar";
import EditorPropertiesBar from "../../editor-properties/editor-properties-bar/editor-properties-bar";
import TargetDate from "../../editor-properties/properties/target-date/target-date";
import TimezonePicker from "../../editor-properties/properties/timezone/timezone-picker";
import BoxRadiusLg from "../../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";

export default function Editor() {
  return (
    <EditorWrapper>
      <VStack position="absolute" top={5} left={5} spacing={4} zIndex={40}>
        <EditorPropertiesBar />
      </VStack>
      <CenterContent>
        <BoxRadiusLg bg={"gray.200"}>
          <TargetDate size="sm" />
          <TimezonePicker size="sm" />
        </BoxRadiusLg>
        <EditorPreview />
      </CenterContent>
      <VStack position="absolute" top={5} right={5} spacing={4} zIndex={40}>
        <BreakpointsBar />
      </VStack>
    </EditorWrapper>
  );
}
