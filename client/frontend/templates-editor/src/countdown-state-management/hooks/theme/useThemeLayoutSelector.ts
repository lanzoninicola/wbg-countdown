import { ThemeStateAction } from "../../types/theme/actions";
import { ThemeLayoutContextData } from "../../types/theme/layout";
import useThemeContext from "./useThemeContext";

type ThemeLayoutContextDataWithDispatcher = ThemeLayoutContextData & {
  themeDispatcher: React.Dispatch<ThemeStateAction>;
};

export default function useThemeLayoutSelector(): ThemeLayoutContextDataWithDispatcher {
  const { layout, themeDispatcher } = useThemeContext();

  return {
    ...layout,
    themeDispatcher,
  };
}
