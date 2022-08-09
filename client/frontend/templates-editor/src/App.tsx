import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./global/header/header";
import MainContent from "./global/common/layout/main-content/main-content";
import EditorPage from "./editor/editor-page";
import { OnboardingProvider } from "./onboarding";

/** START: Info localized by Wordpress */
// @ts-ignore
const productId = "1"; //clockdownLocalized.product_id;
// @ts-ignore
const installationId = "7cg9997b-0f40-11ed-9cce-040e3caabadb";
//clockdownLocalized.installation_id;
// @ts-ignore
const onboardingStatus = "pending"; //clockdownLocalized.onboarding_status;
/** END: Info localized by Wordpress */

function App() {
  return (
    <MainContent>
      <OnboardingProvider
        currentStatus={onboardingStatus}
        productId={productId}
        installationId={installationId}
      >
        <Header />
      </OnboardingProvider>
      <EditorPage />
    </MainContent>
  );
}

export default App;
