import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useEditorSettings from "../../../countdown-widget/hooks/useEditorSettings";
import { CountdownModel } from "../../../countdown-widget/types";
import EditorPreview from "../../editor-preview/editor-preview";
import TargetDate from "../../editor-properties/components/target-date/target-date";
import TimezonePicker from "../../editor-properties/components/timezone/timezone-picker";
import EditorProperties from "../../editor-properties/editor-properties";
import BoxRadiusLg from "../../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";
import LeftSidebar from "../../layout/left-sidebar/left-sidebar";
import RightSidebar from "../../layout/right-sidebar/right-sidebar";
import EditorSkeleton from "../editor-skeleton.tsx/editor-skeleton";

interface EditorPageProps {
  currentCountdown?: CountdownModel["id"];
}

export default function EditorPage({ currentCountdown }: EditorPageProps) {
  const { isError, isLoading } = useEditorSettings({
    current: currentCountdown,
  });

  return (
    <>
      {isError ? (
        <div>Error</div>
      ) : isLoading ? (
        <EditorSkeleton />
      ) : (
        <EditorWrapper>
          <LeftSidebar>
            <EditorProperties />
          </LeftSidebar>
          <CenterContent>
            <BoxRadiusLg bg={"gray.200"}>
              <TargetDate size="sm" />
              <TimezonePicker size="sm" />
            </BoxRadiusLg>
            <EditorPreview />
          </CenterContent>
          {/* <RightSidebar>
            <Text>This is the countdown theme area</Text>
          </RightSidebar> */}
        </EditorWrapper>
      )}
    </>
  );
}
