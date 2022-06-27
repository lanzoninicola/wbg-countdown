import "./i18n";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Header from "./components/header/header";
import MainContent from "./components/layout/main-content/main-content";
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
