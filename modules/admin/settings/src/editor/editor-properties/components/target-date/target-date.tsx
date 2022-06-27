import { Input, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useSettingsContext from "../../../../countdown-provider/hooks/settings/useSettingsContext";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface TargetDateProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TargetDate({ size }: TargetDateProps) {
  const { t } = useTranslation();
  const { targetDate, setTargetDate } = useSettingsContext();

  function onChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    setTargetDate(e.target.value);
  }

  return (
    <PropertyWrapper firstColumnW="120px" columns={4}>
      <Label size={size}>{t("editor.targetDate").capitalize()}</Label>
      <Input
        size={size as ThemingProps<"Input">["size"]}
        type="datetime-local"
        id="target-date"
        name="target-date"
        onChange={onChangeDate}
        gridColumn={"2 / 5"}
        className="theme-font"
        fontSize={"sm"}
        value={targetDate}
        bg={"white"}
        borderRadius={"md"}
      />
    </PropertyWrapper>
  );
}
