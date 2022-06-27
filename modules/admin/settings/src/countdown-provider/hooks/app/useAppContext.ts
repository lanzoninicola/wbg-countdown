import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { AppContext } from "../../types/app";

export default function useAppContext(): AppContext {
  const appContext = useContextSelector(CountdownContext, (state) => state.app);

  const {
    currentCountdown,
    currentToken,
    isEditorMode,
    setCurrentCountdown,
    setCurrentToken,
    setIsEditorMode,
    setTimerExpired,
    timerExpired,
  } = appContext;

  useEffect(() => {
    if (currentCountdown === undefined) {
      console.error(
        "useAppContext hook must be used within a CountdownProvider"
      );
    }
  }, [currentCountdown]);

  return {
    currentCountdown,
    setCurrentCountdown,
    currentToken,
    setCurrentToken,
    isEditorMode,
    setIsEditorMode,
    timerExpired,
    setTimerExpired,
  };
}
