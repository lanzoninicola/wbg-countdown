import { useEffect } from "react";
import useAppContext from "../../countdown-provider/hooks/app/useAppContext";

import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import useSettingsContext from "../../countdown-provider/hooks/settings/useSettingsContext";
import useThemeContext from "../../countdown-provider/hooks/theme/useThemeContext";
import useFetchLastMutatedCountdownSettings from "./useFetchLastMutatedCountdownSettings";

export default function useLastMutatedCountdownSettings() {
  const { currentCountdown, setCurrentCountdown } =
    useCurrentCountdownSelector();
  const { setIsEditorMode } = useAppContext();
  const { data, isError, isLoading, error } =
    useFetchLastMutatedCountdownSettings({
      skipFetch: currentCountdown !== null,
    });

  const { setTargetDate, setTargetTimezone, setUnitLabelLanguage } =
    useSettingsContext();
  const { setGlobal, setTimer, setTitle, setLayout } = useThemeContext();

  useEffect(() => {
    if (!data?.id) {
      return;
    }

    setCurrentCountdown(data.id);
    setIsEditorMode(true);

    if (!data?.settings) {
      return;
    }

    const {
      targetDate,
      targetTimezone,
      global,
      timer,
      title,
      layout,
      unitLabelLanguage,
    } = data.settings;

    if (targetDate) {
      setTargetDate(targetDate);
    }
    if (targetTimezone) {
      setTargetTimezone(targetTimezone);
    }
    if (global) {
      setGlobal(global);
    }
    if (timer) {
      setTimer(timer);
    }
    if (title) {
      setTitle(title);
    }
    if (unitLabelLanguage) {
      setUnitLabelLanguage(unitLabelLanguage);
    }
    if (layout) {
      setLayout(layout);
    }
  }, [data, isError, isLoading]);

  return {
    countdownId: data?.id,
    isError,
    isLoading,
    error,
  };
}
