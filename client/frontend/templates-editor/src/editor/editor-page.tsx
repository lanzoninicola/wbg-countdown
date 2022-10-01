import { useEffect } from "react";

import useEditorStateWithDispatcher from "../countdown-state-management/common/hooks/editor/useEditorStateWithDispatcher";
import Editor from "./components/editor/editor";

export default function EditorPage() {
  const { currentCountdown, editorDispatcher } = useEditorStateWithDispatcher();

  useEffect(() => {
    editorDispatcher({
      type: "EDITOR_ON_CHANGE_IS_EDITOR_MODE_FLAG",
      payload: true,
    });
  }, []);

  return <Editor />;
}
