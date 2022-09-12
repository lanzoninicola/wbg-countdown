import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { AppStateData } from "../../types/app";
import { AppStateAction } from "../../types/app/actions";

type AppStateDataWithDispatcher = AppStateData & {
  appDispatcher: React.Dispatch<AppStateAction>;
};

export default function useAppSelector(): AppStateDataWithDispatcher {
  const state = useContextSelector(EditorContext, (state) => state.app);

  const appDispatcher = useContextSelector(
    EditorContext,
    (state) => state.appDispatcher
  );

  useEffect(() => {
    state.currentCountdown === undefined &&
      console.error("useAppContext hook must be used within a EditorProvider");
  }, [state.currentCountdown]);

  return {
    ...state,
    appDispatcher,
  };
}
