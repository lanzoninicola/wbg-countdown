import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import {
  ElementSize,
  ThemeGlobalContextData,
  ThemeGlobalContextSetter,
} from "../../types/theme/global";

export type UseThemeGlobalSelector = ThemeGlobalContextData &
  ThemeGlobalContextSetter;

/**
 * Hook that let works with the single item of the "Timer" state.
 */
export default function useContainerSizeSelector(): UseThemeGlobalSelector {
  const global = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.global
  );

  const setGlobal = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.setGlobal
  );

  const { containerSize } = global;

  function setContainerSize(size: ElementSize) {
    const nextCountdownContainerSize = {
      ...containerSize,
      ...size,
    };
    setGlobal({
      ...global,
      containerSize: nextCountdownContainerSize,
    });
  }

  return {
    containerSize,
    setContainerSize,
  };
}
