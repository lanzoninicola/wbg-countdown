import { Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeTitleSelector from "../../../../countdown-provider/hooks/theme/useThemeTitleSelector";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function CountdownTitleText() {
  const { t } = useTranslation();
  const { text, setText } = useThemeTitleSelector();

  return (
    <PropertyWrapper>
      <Label>{t("editor.text")}</Label>
      <Input
        size={"xs"}
        type="text"
        title="countdownName"
        name="countdownName"
        placeholder={t("editor.titlePlaceholder")}
        gridColumn={"2 / -1"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="theme-font"
      />
    </PropertyWrapper>
  );
}
