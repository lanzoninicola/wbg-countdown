import { OnboardingModal, useOnboardingCheckStatus } from "../../../onboarding";
import EditorSaveButton from "./editor-save-button/editor-save-button";

export default function EditorSave() {
  const status = useOnboardingCheckStatus();

  // TODO: handle onboarding thankyou and failed

  /**
  const { onboardingResult } = useOnboardingContext();

  if (status === "pending" && onboardingResult === "success") {
    return (
      <OnboardingModal config="success" body={<EditorSaveButton />}>
        <EditorSaveButton />
      </OnboardingModal>
    );
  }

  if (status === "pending" && onboardingResult === "failed") {
    return (
      <OnboardingModal config="failed" body={<EditorSaveButton />}>
        <EditorSaveButton />
      </OnboardingModal>
    );
  }
   */

  if (status === "pending") {
    return (
      <OnboardingModal config="onboardingForm">
        <EditorSaveButton />
      </OnboardingModal>
    );
  }

  return <EditorSaveButton />;
}
