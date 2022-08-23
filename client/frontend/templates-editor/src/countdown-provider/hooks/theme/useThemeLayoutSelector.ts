import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import {
  CountdownLayoutOrientation,
  ThemeLayoutContextData,
  ThemeLayoutContextSetter,
} from "../../types/theme/layout";

type useThemeLayoutSelector = ThemeLayoutContextSetter & ThemeLayoutContextData;

export default function useThemeLayoutSelector(): useThemeLayoutSelector {
  const layout = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.layout
  );

  const setLayout = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.theme.setLayout
  );

  function setOrientation(orientation: CountdownLayoutOrientation) {
    setLayout({ ...layout, orientation });
  }

  function setGap(gap: number) {
    setLayout({ ...layout, gap });
  }

  function setFitOnScreen(fitOnScreen: boolean) {
    setLayout({ ...layout, fitOnScreen });
  }

  function setTransparentBackground(transparentBackground: boolean) {
    setLayout({ ...layout, transparentBackground });
  }

  function setBackgroundColor(backgroundColor: string) {
    setLayout({ ...layout, backgroundColor });
  }

  return {
    setOrientation,
    setGap,
    setFitOnScreen,
    setTransparentBackground,
    setBackgroundColor,
    ...layout,
  };
}
