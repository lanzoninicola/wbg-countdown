import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { ThemeContext } from "../../types/theme";

export default function useThemeContext(): ThemeContext {
  const theme = useContextSelector(CountdownContext, (ctx) => ctx?.theme);

  const { timer, setTimer, title, setTitle } = theme;

  return {
    timer,
    setTimer,
    title,
    setTitle,
  };
}
