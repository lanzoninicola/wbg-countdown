import useAppContext from "../countdown-provider/hooks/app/useAppContext";
import Editor from "./components/editor/editor";

export default function EditorPage() {
  const { currentCountdown } = useAppContext();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  return <Editor currentCountdown={currentCountdown} />;
}
