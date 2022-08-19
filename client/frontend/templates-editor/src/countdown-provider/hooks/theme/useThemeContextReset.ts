import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import THEME_INITIAL_STATE from "../../constants/theme/initial-state";
import { CountdownContext } from "../../context/countdown-context";

/**
 * Reset the Theme state (timer, title).
 */
export default function useThemeContextReset() {
  const setTimer = useContextSelector(
    CountdownContext,
    (state) => state.theme.setTimer
  );

  const setTitle = useContextSelector(
    CountdownContext,
    (state) => state.theme.setTitle
  );

  const setGlobal = useContextSelector(
    CountdownContext,
    (state) => state.theme.setGlobal
  );

  const resetThemeContext = () => {
    const { timer, title, global } = THEME_INITIAL_STATE;

    setTimer(timer);
    setTitle(title);
    setGlobal(global);
  };

  useEffect(() => {
    if (setTimer === undefined) {
      console.error(
        "useThemeReset hook must be used within a CountdownProvider"
      );
    }
  }, [setTimer]);

  return {
    resetThemeContext,
  };
}
