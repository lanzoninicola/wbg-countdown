import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { FontsizeUnit } from "../../../countdown-widget-typography/types";

import { CountdownContext } from "../../context/countdown-context";

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
