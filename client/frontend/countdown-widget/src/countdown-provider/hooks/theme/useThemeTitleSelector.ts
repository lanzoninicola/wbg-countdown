import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { ChakraToken } from "../../types/theme/responsive";
import {
  ThemeTitleContextData,
  ThemeTitleContextSetter,
} from "../../types/theme/title";

type UseThemeTitleSelector = ThemeTitleContextData & ThemeTitleContextSetter;

/**
 * Hook that let works with the single item of the "Title" state.
 */
export default function useThemeTitleSelector(): UseThemeTitleSelector {
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

  function setText(text: string) {
    setTitle({ ...title, text });
  }

  function setFontFamily(fontFamily: string) {
    setTitle({ ...title, fontFamily });
  }

  function setFontWeight(fontWeight: string) {
    setTitle({ ...title, fontWeight });
  }

  function setFontSize(token: ChakraToken, size: number) {
    const nextState = { ...title, fontSize };

    nextState.fontSize[token] = size;

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
    fontColor,
    setText,
    setFontFamily,
    setFontWeight,
    setFontSize,
    setFontColor,
  };
}
