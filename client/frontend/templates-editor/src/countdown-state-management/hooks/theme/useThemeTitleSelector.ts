import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeTitleContextData } from "../../types/theme/title";
import useThemeContext from "./useThemeContext";

type ThemeTitleContextDataWithDispatcher = ThemeTitleContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleSelector(): ThemeTitleContextDataWithDispatcher {
  const { title, themeDispatcher } = useThemeContext();

  return {
    ...title,
    themeDispatcher,
  };
}
