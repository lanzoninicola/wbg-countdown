import {
  OnboardingModalForm,
  useOnboardingCheckStatus,
} from "../../../onboarding";
import useSaveSettings from "../../hooks/useSaveSettings";
import EditorSaveButton from "./editor-save-button/editor-save-button";

export default function EditorSave() {
  const { onSave, isLoading } = useSaveSettings();
  const status = useOnboardingCheckStatus();

  if (status === "pending") {
    return (
      <OnboardingModalForm>
        <EditorSaveButton />
      </OnboardingModalForm>
    );
  }

  return <EditorSaveButton onClick={onSave} isLoading={isLoading} />;
}
