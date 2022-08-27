import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { AppStateData } from "../../types/app";
import { AppStateAction } from "../../types/app/actions";

type AppStateDataWithDispatcher = AppStateData & {
  appDispatcher: React.Dispatch<AppStateAction>;
};

export default function useAppContext(): AppStateDataWithDispatcher {
  const state = useContextSelector(CountdownContext, (state) => state.app);

  const appDispatcher = useContextSelector(
    CountdownContext,
    (state) => state.appDispatcher
  );

  useEffect(() => {
    state.currentCountdown === undefined &&
      console.error(
        "useAppContext hook must be used within a CountdownProvider"
      );
  }, [state.currentCountdown]);

  return {
    ...state,
    appDispatcher,
  };
}
