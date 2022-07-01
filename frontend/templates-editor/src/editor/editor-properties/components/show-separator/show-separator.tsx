import { Checkbox } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface ShowSeparatorProps {
  showSeparator: boolean;
  onChangeShowSeparator: (showSeparator: boolean) => void;
}

export default function showSeparator({
  showSeparator,
  onChangeShowSeparator,
}: ShowSeparatorProps) {
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label htmlFor="showSeparator">
        {t("editor.separator.showSeparatorLabel")}
      </Label>
      <Checkbox
        id="showSeparator"
        name="showSeparator"
        size="sm"
        isChecked={showSeparator}
        onChange={(e) => {
          onChangeShowSeparator(e.target.checked);
        }}
        aria-label={t("editor.separator.showSeparatorAriaLabel")}
      />
    </PropertyWrapper>
  );
}
