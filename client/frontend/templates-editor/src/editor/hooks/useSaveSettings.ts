import { t } from "i18next";
import { useState } from "react";

import useCurrentCountdownSelector from "../../countdown-provider/hooks/app/useCurrentCountdownSelector";
import useSettings from "../../countdown-provider/hooks/settings/useSettings";
import useTheme from "../../countdown-provider/hooks/theme/useTheme";
import { update } from "../../countdown-rest-api/services/editor";
import { CountdownSettingsAndTheme } from "../../countdown-widget/types";
import useNotifications from "../../notifications/hooks/useNotifications";

export default function useSaveSettings() {
  const { currentCountdown } = useCurrentCountdownSelector();
  const [isLoading, setIsLoading] = useState(false);

  const { success, error } = useNotifications();

  const settings = useSettings();
  const theme = useTheme();
  const savePayload: CountdownSettingsAndTheme = {
    ...settings,
    ...theme,
  };

  function onSave() {
    setIsLoading(true);

    update(currentCountdown!, savePayload)
      .then((res) => {
        if (res.code === "error") {
          error(t("global.error"), {
            title: t("global.errorTitle"),
          });
        }

        if (res.code === "success") {
          success(t("global.success"), {
            title: t("global.successTitle"),
          });
        }
      })
      .catch(() => {
        error(t("global.error"), {
          title: t("global.errorTitle"),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return { onSave, isLoading };
}
