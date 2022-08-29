import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { AppStateData } from "../../types/app";

export default function useAppContext(): AppStateData {
  const state = useContextSelector(CountdownContext, (state) => state.app);

  useEffect(() => {
    state.currentCountdown === undefined &&
      console.error(
        "useAppContext hook must be used within a CountdownProvider"
      );
  }, [state.currentCountdown]);

  return {
    ...state,
  };
}
