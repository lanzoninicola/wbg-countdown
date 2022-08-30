import { OnboardingModal } from "../../onboarding";
import HtmlEmbeddedCodeModal from "./components/html-embedded-code-modal/html-embedded-code-modal";

export default function HtmlEmbeddedCode() {
  return (
    <OnboardingModal>
      <HtmlEmbeddedCodeModal />
    </OnboardingModal>
  );
}
