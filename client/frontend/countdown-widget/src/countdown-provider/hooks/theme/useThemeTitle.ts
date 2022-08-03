import { ThemeTitleContextData } from "../../types/theme/title";
import useThemeTitleSelector from "./useThemeTitleSelector";

/**
 * Read-only hook to get the theme related to the countdown title data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
export default function useThemeTitle(): Omit<ThemeTitleContextData, "text"> {
  const { fontFamily, fontWeight, fontSize, fontColor } =
    useThemeTitleSelector();

  return {
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
  };
}
