import { useContextSelector } from "use-context-selector";

import { withUnit } from "../../../countdown-widget-typography/countdown-widget-typography";
import { CountdownContext } from "../../context/countdown-context";
import { ChakraResponsiveValuesWithUnit } from "../../types/theme/responsive";
import { ThemeTitleContextData } from "../../types/theme/title";
import useCurrentTokenSelector from "../app/useCurrentTokenSelector";

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleSelector() {
  const { currentToken } = useCurrentTokenSelector();
  const title: ThemeTitleContextData = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.title
  );

  const setTitle = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.setTitle
  );

  const fontFamily = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.title.fontFamily
  );

  const { fontColor, fontSize, fontWeight, text } = title;

  const fontSizeChakra: ChakraResponsiveValuesWithUnit =
    Object.values(fontSize);

  function setText(text: string) {
    setTitle({ ...title, text });
  }

  function setFontFamily(fontFamily: string) {
    setTitle({ ...title, fontFamily });
  }

  function setFontWeight(fontWeight: string) {
    setTitle({ ...title, fontWeight });
  }

  function setFontSize(size: number) {
    const nextState = { ...title, fontSize };

    nextState.fontSize[currentToken] = withUnit(size);

    setTitle(nextState);
  }

  function setFontColor(fontColor: string) {
    setTitle({ ...title, fontColor });
  }

  return {
    text,
    fontFamily,
    fontWeight,
    fontSize,
    fontSizeChakra,
    fontColor,
    setText,
    setFontFamily,
    setFontWeight,
    setFontSize,
    setFontColor,
  };
}
