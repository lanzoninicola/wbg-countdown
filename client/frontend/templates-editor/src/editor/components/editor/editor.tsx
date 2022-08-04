import { useEffect, useState } from "react";

import useEditorSettings from "../../../countdown-widget/hooks/useEditorSettings";
import { CountdownModel } from "../../../countdown-widget/types";
import EditorPreview from "../../editor-preview/editor-preview";
import EditorPropertiesFloat from "../../editor-properties/components/editor-properties-float/editor-properties-float";
import TargetDate from "../../editor-properties/components/target-date/target-date";
import TimezonePicker from "../../editor-properties/components/timezone/timezone-picker";
import BoxRadiusLg from "../../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";
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
          <EditorPropertiesFloat />
          <CenterContent>
            {currentCountdown ? (
              <>
                <BoxRadiusLg bg={"gray.200"}>
                  <TargetDate size="sm" />
                  <TimezonePicker size="sm" />
                </BoxRadiusLg>
                <EditorPreview />
              </>
            ) : (
              <h1>select a countdown to customize</h1>
            )}
          </CenterContent>
          {/* <RightSidebar>
            <Text>This is the countdown theme area</Text>
          </RightSidebar> */}
        </EditorWrapper>
      )}
    </>
  );
}
