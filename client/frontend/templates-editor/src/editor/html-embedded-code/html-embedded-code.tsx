import { OnboardingModal } from "../../onboarding";
import HtmlEmbeddedCodeInput from "./components/html-embedded-code-input/html-embedded-code-input";
import HtmlEmbeddedCodeModal from "./components/html-embedded-code-modal/html-embedded-code-modal";

export default function HtmlEmbeddedCode() {
  return (
    <OnboardingModal>
      <HtmlEmbeddedCodeInput />
    </OnboardingModal>
  );
}
