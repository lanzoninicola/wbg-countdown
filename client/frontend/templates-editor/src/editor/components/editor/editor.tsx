import EditorPreview from "../../editor-preview/editor-preview";
import EditorPropertiesBar from "../../editor-properties/editor-properties-bar/editor-properties-bar";
import TargetDate from "../../editor-properties/properties/target-date/target-date";
import TimezonePicker from "../../editor-properties/properties/timezone/timezone-picker";
import BoxRadiusLg from "../../layout/box-radius-lg/box-radius-lg";
import CenterContent from "../../layout/center-content/center-content";
import EditorWrapper from "../../layout/editor-wrapper/editor-wrapper";

export default function Editor() {
  return (
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
  );
}
