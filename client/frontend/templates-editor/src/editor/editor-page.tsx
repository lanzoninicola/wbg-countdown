import useCurrentCountdownSelector from "../countdown-provider/hooks/app/useCurrentCountdownSelector";
import Editor from "./components/editor/editor";
import useFetchLastMutatedCountdownSettings from "./hooks/useFetchLastMutatedCountdownSettings";
import useLastMutatedCountdownSettings from "./hooks/useLastMutatedCountdownSettings";

/**
 *  This is the main entry point for the countdowns page.
 *
 *  This is a convenience wrapper around the EditorPage component,
 *  needed to determine whether or not it should be rendered based on the currentCountDown state
 *  due the position of Context providers in the app.
 *
 */
export default function EditorPage() {
  const { isLoading, isError } = useLastMutatedCountdownSettings();

  const { currentCountdown } = useCurrentCountdownSelector();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <Editor currentCountdown={currentCountdown} />;
}
