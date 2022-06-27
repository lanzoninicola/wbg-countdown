import { Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface SeparatorCharProps {
  showSeparator: boolean;
  separatorChar: string;
  onChangeSeparatorChar: (separatorChar: string) => void;
}

export default function SeparatorChar({
  showSeparator,
  separatorChar,
  onChangeSeparatorChar,
}: SeparatorCharProps) {
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label htmlFor="separatorChar">{t("editor.separator.label")}</Label>
      <Input
        id="separatorChar"
        name="separatorChar"
        size="sm"
        maxLength={1}
        onChange={(e) => {
          onChangeSeparatorChar(e.target.value);
        }}
        aria-label={t("editor.separator.ariaLabel")}
        isDisabled={showSeparator === false}
        value={separatorChar}
        className="theme-font"
        w="2rem"
      />
    </PropertyWrapper>
  );
}
