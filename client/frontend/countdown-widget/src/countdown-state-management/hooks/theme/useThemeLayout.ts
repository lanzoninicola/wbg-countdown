import { ThemeLayoutContextData } from "../../types/theme/layout";
import useThemeLayoutSelector from "./useThemeLayoutSelector";

/**
 * Read-only hook that returns the data for the data related to the layout.
 *
 * @returns {ThemeLayoutContextData}
 */
export default function useThemeLayout(): ThemeLayoutContextData {
  const layout = useThemeLayoutSelector();

  return { ...layout };
}
