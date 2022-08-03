import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { CountdownContext } from "../../context/countdown-context";
import { FontsizeUnit } from "../../types/theme/responsive";

interface UseFontsizeUnitProps {
  fontSizeUnit: FontsizeUnit;
  setFontSizeUnit: (unit: FontsizeUnit) => void;
}

export default function useFontsizeUnitSelector(): UseFontsizeUnitProps {
  const fontSizeUnit = useContextSelector(
    CountdownContext,
    (state) => state.app.fontSizeUnit
  );

  const setFontSizeUnit = useContextSelector(
    CountdownContext,
    (state) => state.app.setFontSizeUnit
  );

  useEffect(() => {
    if (fontSizeUnit === undefined) {
      console.error(
        "useFontsizeUnitSelector hook must be used within a CountdownProvider"
      );
    }
  }, [fontSizeUnit]);

  return { fontSizeUnit, setFontSizeUnit };
}
