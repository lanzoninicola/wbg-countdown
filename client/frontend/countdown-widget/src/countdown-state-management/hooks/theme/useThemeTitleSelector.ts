import { useContextSelector } from "use-context-selector";

import { EditorContext } from "../../context/editor-context/editor-context";
import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeTitleContextData } from "../../types/theme/title";

type ThemeTitleContextDataWithDispatcher = ThemeTitleContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleSelector(): ThemeTitleContextDataWithDispatcher {
  const title: ThemeTitleContextData = useContextSelector(
    EditorContext,
    (ctx) => ctx?.theme.title
  );

  const themeDispatcher = useContextSelector(
    EditorContext,
    (ctx) => ctx?.themeDispatcher
  );

  return {
    ...title,
    themeDispatcher,
  };
}
