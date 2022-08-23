import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useEditorSettings from "../../../countdown-widget/hooks/useEditorSettings";
import { CountdownModel } from "../../../countdown-widget/types";
import EditorPreview from "../../editor-preview/editor-preview";
import EditorPropertiesBar from "../../editor-properties/editor-properties-bar/editor-properties-bar";
import TargetDate from "../../editor-properties/properties/target-date/target-date";
import TimezonePicker from "../../editor-properties/properties/timezone/timezone-picker";
import BoxRadiusLg from "../../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";
import RightSidebar from "../../layout/right-sidebar/right-sidebar";
import EditorSkeleton from "../editor-skeleton.tsx/editor-skeleton";

interface EditorProps {
  currentCountdown?: CountdownModel["id"] | null;
}

export default function Editor({ currentCountdown }: EditorProps) {
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
          <EditorPropertiesBar />
          <CenterContent>
            <BoxRadiusLg bg={"gray.200"}>
              <TargetDate size="sm" />
              <TimezonePicker size="sm" />
            </BoxRadiusLg>
            <EditorPreview />
          </CenterContent>
        </EditorWrapper>
      )}
    </>
  );
}
