import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { AppStateData } from "../../types/app";

export default function useAppContext(): AppStateData {
  const state = useContextSelector(EditorContext, (state) => state.app);

  console.log(state);

  useEffect(() => {
    state.currentToken === undefined &&
      console.error("useAppContext hook must be used within a EditorProvider");
  }, [state.currentToken]);

  return {
    ...state,
  };
}
