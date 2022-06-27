import { useContextSelector } from "use-context-selector";
import APP_INITIAL_STATE from "../../constants/app/initial-state";
import { CountdownContext } from "../../context/countdown-context";

export default function useAppContextReset() {
  const setCurrentCountdown = useContextSelector(
    CountdownContext,
    (state) => state.app.setCurrentCountdown
  );

  const setCurrentToken = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.setCurrentToken
  );

  const setIsEditorMode = useContextSelector(
    CountdownContext,
    (state) => state.app.setIsEditorMode
  );

  const setTimerExpired = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.setTimerExpired
  );

  const resetAppContext = () => {
    const { currentCountdown, currentToken, isEditorMode, timerExpired } =
      APP_INITIAL_STATE;

    setCurrentCountdown(currentCountdown);
    setCurrentToken(currentToken);
    setIsEditorMode(isEditorMode);
    setTimerExpired(timerExpired);
  };

  return {
    resetAppContext,
  };
}
