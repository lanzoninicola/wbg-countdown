import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { ThemeContext } from "../../types/theme";

export default function useThemeContext(): ThemeContext {
  const theme = useContextSelector(EditorContext, (ctx) => ctx?.theme);

  return {
    ...theme,
  };
}
