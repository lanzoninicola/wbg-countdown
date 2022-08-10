import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./global/header/header";
import MainContent from "./global/common/layout/main-content/main-content";
import EditorPage from "./editor/editor-page";
import { OnboardingProvider } from "./onboarding";

function App() {
  return (
    <MainContent>
      <Header />
      <EditorPage />
    </MainContent>
  );
}

export default App;
