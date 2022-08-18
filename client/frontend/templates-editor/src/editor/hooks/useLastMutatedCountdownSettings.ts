import { useEffect } from "react";
import useSettingsContext from "../../countdown-provider/hooks/settings/useSettingsContext";
import useThemeContext from "../../countdown-provider/hooks/theme/useThemeContext";
import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import { lastMutatedOne } from "../../countdown-rest-api/services/countdowns";
import useFetchLastMutatedCountdownSettings from "./useFetchLastMutatedCountdownSettings";

export default function useLastMutatedCountdownSettings() {
  const { currentCountdown } = useCurrentCountdownSelector();
  const { data, isError, isLoading, error } =
    useFetchLastMutatedCountdownSettings({
      skipFetch: currentCountdown !== null,
    });

  // console.log("EditorPage", {
  //   data,

  //   isError,
  //   isLoading,
  //   error,
  // });

  const { setTargetDate, setTargetTimezone, setUnitLabelLanguage } =
    useSettingsContext();
  const { setGlobal, setTimer, setTitle } = useThemeContext();

  // return the id of the countdown to be displayed
}
