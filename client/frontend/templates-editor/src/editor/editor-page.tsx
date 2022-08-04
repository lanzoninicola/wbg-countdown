import useCurrentCountdownSelector from "../countdown-provider/hooks/app/useCurrentCountdownSelector";
import Editor from "./components/editor/editor";

/**
 *  This is the main entry point for the countdowns page.
 *
 *  This is a convenience wrapper around the EditorPage component,
 *  needed to determine whether or not it should be rendered based on the currentCountDown state
 *  due the position of Context providers in the app.
 *
 */
export default function EditorPage() {
  const { currentCountdown } = useCurrentCountdownSelector();

  return <Editor currentCountdown={currentCountdown} />;
}
