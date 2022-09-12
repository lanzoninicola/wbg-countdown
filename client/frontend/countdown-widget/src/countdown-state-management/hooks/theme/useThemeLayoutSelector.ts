import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeLayoutContextData } from "../../types/theme/layout";

type ThemeLayoutContextDataWithDispatcher = ThemeLayoutContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

export default function useThemeLayoutSelector(): ThemeLayoutContextDataWithDispatcher {
  const layout = useContextSelector(EditorContext, (ctx) => ctx?.theme.layout);

  const themeDispatcher = useContextSelector(
    EditorContext,
    (ctx) => ctx?.themeDispatcher
  );

  return {
    ...layout,
    themeDispatcher,
  };
}
