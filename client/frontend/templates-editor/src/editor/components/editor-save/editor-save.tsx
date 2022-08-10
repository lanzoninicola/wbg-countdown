import {
  OnboardingModal,
  useOnboardingStatusSelector,
} from "../../../onboarding";
import useSaveSettings from "../../hooks/useSaveSettings";
import EditorSaveButton from "./editor-save-button/editor-save-button";

export default function EditorSave() {
  const { onSave, isLoading } = useSaveSettings();
  const { status: onboardingStatus } = useOnboardingStatusSelector();

  if (onboardingStatus === "pending") {
    return (
      <OnboardingModal>
        <EditorSaveButton />
      </OnboardingModal>
    );
  }

  return <EditorSaveButton onClick={onSave} isLoading={isLoading} />;
}
