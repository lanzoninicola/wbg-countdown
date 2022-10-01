import { useEffect } from "react";

import useEditorSelector from "../countdown-state-management/hooks/editor/useEditorSelector";
import Editor from "./components/editor/editor";

export default function EditorPage() {
  const { currentCountdown, editorDispatcher } = useEditorSelector();

  useEffect(() => {
    editorDispatcher({
      type: "EDITOR_ON_CHANGE_IS_EDITOR_MODE_FLAG",
      payload: true,
    });
  }, []);

  return <Editor />;
}
