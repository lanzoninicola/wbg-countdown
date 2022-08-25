import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { ThemeStateData } from "../../types/theme";

/**
 *
 * Hook that let works with the macro-groups of Theme state.
 *
 */
export default function useTheme(): ThemeStateData {
  const themeContext = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme
  );

  const { global, timer, title, layout } = themeContext;

  useEffect(() => {
    if (timer === undefined || title === undefined) {
      console.error("useTheme hook must be used within a CountdownProvider");
    }
  }, [timer]);

  return {
    global,
    layout,
    timer,
    title,
  };
}
