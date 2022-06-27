import useCurrentCountdownSelector from "../countdown-provider/hooks/app/useCurrentCountdownSelector";
import EditorPage from "./components/editor-page/editor-page";

/**
 *  This is the main entry point for the countdowns page.
 *
 *  This is a convenience wrapper around the EditorPage component,
 *  needed to determine whether or not it should be rendered based on the currentCountDown state
 *  due the position of Context providers in the app.
 *
 */
export default function Editor() {
  const { currentCountdown } = useCurrentCountdownSelector();

  return (
    <>
      {currentCountdown && <EditorPage currentCountdown={currentCountdown} />}
    </>
  );
}
