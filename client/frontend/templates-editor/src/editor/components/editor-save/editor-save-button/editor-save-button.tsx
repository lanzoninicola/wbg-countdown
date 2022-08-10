import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSaveSettings from "../../../hooks/useSaveSettings";

import ButtonSave from "../../../layout/button-save/button-save";

interface EditorSaveButtonProps {
  onClick?: () => void;
}

export default function EditorSaveButton({ onClick }: EditorSaveButtonProps) {
  const { onSave, isLoading } = useSaveSettings();
  const { t } = useTranslation();

  return (
    <ButtonSave
      label={t("editor.saveSettings").capitalize()}
      colorScheme={"green"}
      onClick={onClick || onSave}
      isLoading={isLoading}
      loadingText={t("global.saving").capitalize()}
    />
  );
}
