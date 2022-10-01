import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../context/editor-context/editor-context";
import { WidgetContext } from "../../context/widget-context/widget-context";
import { ThemeContext } from "../../types/theme";
import { ThemeStateAction } from "../../types/theme/actions";

interface ThemeContextDataWithDispatcher extends ThemeContext {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
}

export default function useThemeContext(): ThemeContextDataWithDispatcher {
  const { theme: editorTheme, themeDispatcher } = useContextSelector(
    EditorContext,
    (ctx) => ctx
  );
  const { theme: widgetTheme } = useContextSelector(
    WidgetContext,
    (ctx) => ctx
  );

  return {
    ...editorTheme,
    ...widgetTheme,
    themeDispatcher,
  };
}
