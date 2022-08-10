import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ButtonSave from "../../../layout/button-save/button-save";

interface EditorSaveButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

export default function EditorSaveButton({
  onClick,
  isLoading,
}: EditorSaveButtonProps) {
  const { t } = useTranslation();

  return (
    <ButtonSave
      label={t("editor.saveSettings").capitalize()}
      colorScheme={"green"}
      onClick={onClick}
      isLoading={isLoading}
      loadingText={t("global.saving").capitalize()}
    />
  );
}
