import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeLayoutContextData } from "../../types/theme/layout";

type ThemeLayoutContextDataWithDispatcher = ThemeLayoutContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

export default function useThemeLayoutSelector(): ThemeLayoutContextDataWithDispatcher {
  const layout = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.layout
  );

  const themeDispatcher = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.themeDispatcher
  );

  return {
    ...layout,
    themeDispatcher,
  };
}
