import { useState } from "react";
import { useTranslation } from "react-i18next";

import useSettings from "../../../countdown-provider/hooks/settings/useSettings";
import useTheme from "../../../countdown-provider/hooks/theme/useTheme";
import { update } from "../../../countdown-rest-api/services/editor";
import {
  CountdownModel,
  CountdownSettingsAndTheme,
} from "../../../countdown-widget/types";
import useNotifications from "../../../hooks/useNotification";
import ButtonSave from "../../layout/button-save/button-save";

interface EditorSaveProps {
  currentCountdown: CountdownModel["id"] | null;
}

export default function EditorSave({ currentCountdown }: EditorSaveProps) {
  const settings = useSettings();
  const theme = useTheme();
  const { t } = useTranslation();
  const { success, error } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const savePayload: CountdownSettingsAndTheme = {
    ...settings,
    ...theme,
  };

  function onSave() {
    setIsLoading(true);
    if (currentCountdown) {
      update(currentCountdown, savePayload)
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
  }

  return (
    <ButtonSave
      label={t("editor.saveSettings").capitalize()}
      colorScheme={"green"}
      onClick={onSave}
      isLoading={isLoading}
      loadingText={t("global.saving").capitalize()}
    />
  );
}
