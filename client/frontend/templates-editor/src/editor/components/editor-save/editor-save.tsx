import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CountdownModel } from "../../../countdown-widget/types";
import ButtonSave from "../../layout/button-save/button-save";
import useEditorSave from "./useEditorSave";

interface EditorSaveProps {
  currentCountdown: CountdownModel["id"] | null;
}

export default function EditorSave({ currentCountdown }: EditorSaveProps) {
  const { t } = useTranslation();
  const { onSaveCountdown, isLoading } = useEditorSave({ currentCountdown });

  function onSave() {
    onSaveCountdown();
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
