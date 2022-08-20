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

  const { orientation } = layout;

  function setOrientation(orientation: CountdownLayoutOrientation) {
    setLayout({ ...layout, orientation });
  }

  return {
    orientation,
    setOrientation,
  };
}
