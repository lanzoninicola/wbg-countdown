import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { CountdownModel } from "../../../countdown-widget/types";
import { CountdownContext } from "../../context/countdown-context";

interface UseCurrentCountdownSelector {
  currentCountdown: CountdownModel["id"] | null;
  setCurrentCountdown: (countdown: CountdownModel["id"] | null) => void;
}

export default function useCurrentCountdownSelector(): UseCurrentCountdownSelector {
  const currentCountdown = useContextSelector(
    CountdownContext,
    (state) => state.app.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    CountdownContext,
    (state) => state.app.setCurrentCountdown
  );

  useEffect(() => {
    if (currentCountdown === undefined) {
      console.error(
        "useCurrentCountdownSelector hook must be used within a CountdownProvider"
      );
    }
  }, [currentCountdown]);

  return { currentCountdown, setCurrentCountdown };
}
