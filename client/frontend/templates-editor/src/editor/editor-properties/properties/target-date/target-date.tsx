import { Input, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useSettingsSelector from "../../../../countdown-state-management/hooks/settings/useSettingsSelector";

import PropertyWrapper from "../../components/layout/property-wrapper/property-wrapper";
import Label from "../../components/primitives/label/label";

interface TargetDateProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TargetDate({ size }: TargetDateProps) {
  const { t } = useTranslation();
  const { targetDate, settingsDispatcher } = useSettingsSelector();

  return (
    <PropertyWrapper firstColumnW="120px" columns={4} bg={"transparent"}>
      <Label size={size}>{t("editor.targetDate").capitalize()}</Label>
      <Input
        size={size as ThemingProps<"Input">["size"]}
        type="datetime-local"
        id="target-date"
        name="target-date"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          settingsDispatcher({
            type: "SETTINGS_ON_CHANGE_TARGET_DATE",
            payload: e.target.value,
          });
        }}
        gridColumn={"2 / 5"}
        className="theme-font"
        fontSize={"sm"}
        value={targetDate}
        bg={"white"}
        borderRadius={"md"}
        borderColor={"unset !important"}
        border={"unset !important"}
      />
    </PropertyWrapper>
  );
}
