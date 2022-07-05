import { ChakraResponsiveValuesWithUnit } from "../../types/theme/responsive";
import { ThemeTitleContextData } from "../../types/theme/title";
import useThemeTitleSelector from "./useThemeTitleSelector";

interface UseThemeTitle extends Omit<ThemeTitleContextData, "text"> {
  fontSizeChakra: ChakraResponsiveValuesWithUnit;
}

/**
 * Read-only hook to get the theme related to the countdown title data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
export default function useThemeTitle(): UseThemeTitle {
  const { fontFamily, fontWeight, fontSize, fontSizeChakra, fontColor } =
    useThemeTitleSelector();

  return {
    fontFamily,
    fontWeight,
    fontSize,
    fontSizeChakra,
    fontColor,
  };
}
