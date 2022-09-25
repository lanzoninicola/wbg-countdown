import { ThemeTemplateContextData } from "../../types/theme/template";
import useThemeContext from "./useThemeContext";

export default function useThemeTemplate(): ThemeTemplateContextData {
  const theme = useThemeContext();

  return {
    name: theme.template.name,
    style: theme.template.style,
  };
}
