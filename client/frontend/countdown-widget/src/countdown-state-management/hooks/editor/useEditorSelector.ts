import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { EditorStateData } from "../../types/editor";
import { EditorStateAction } from "../../types/editor/actions";

type EditorStateDataWithDispatcher = EditorStateData & {
  editorDispatcher: React.Dispatch<EditorStateAction>;
};

export default function useEditorSelector(): EditorStateDataWithDispatcher {
  const state = useContextSelector(EditorContext, (state) => state.editor);

  const editorDispatcher = useContextSelector(
    EditorContext,
    (state) => state.editorDispatcher
  );

  useEffect(() => {
    state.currentToken === undefined &&
      console.error(
        "useEditorContext hook must be used within a EditorProvider"
      );
  }, [state.currentToken]);

  return {
    ...state,
    editorDispatcher,
  };
}
