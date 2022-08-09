import { t } from "i18next";
import { useState } from "react";
import useSettings from "../../../countdown-provider/hooks/settings/useSettings";
import useTheme from "../../../countdown-provider/hooks/theme/useTheme";

import { update } from "../../../countdown-rest-api/services/editor";
import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../../countdown-widget/types";
import useNotifications from "../../../notifications/hooks/useNotifications";

interface UseEditorSaveProps {
  currentCountdown: CountdownModel["id"] | null;
}

export default function useEditorSave({
  currentCountdown,
}: UseEditorSaveProps) {
  if (!currentCountdown) {
    return {
      onSaveCountdown: () => {},
      isLoading: false,
    };
  }

  const settings = useSettings();
  const theme = useTheme();
  const { success, error } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const savePayload: CountdownSettingsAndTheme = {
    ...settings,
    ...theme,
  };

  function onSaveCountdown() {
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

  return { onSaveCountdown, isLoading };
}
