import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./global/header/header";
import MainContent from "./global/common/layout/main-content/main-content";
import Countdowns from "./countdowns/countdowns";
import Editor from "./editor/editor";

function App() {
  return (
    <MainContent>
      <Header />
      <Countdowns />
      <Editor />
    </MainContent>
  );
}

export default App;
