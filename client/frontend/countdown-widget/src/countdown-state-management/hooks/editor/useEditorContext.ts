import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { EditorStateData } from "../../types/editor";

export default function useEditorContext(): EditorStateData {
  const state = useContextSelector(EditorContext, (state) => state.editor);

  useEffect(() => {
    state.currentToken === undefined &&
      console.error(
        "useEditorContext hook must be used within a EditorProvider"
      );
  }, [state.currentToken]);

  return {
    ...state,
  };
}
