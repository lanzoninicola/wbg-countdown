import { Select, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useSettingsSelector from "../../../../countdown-provider/hooks/settings/useSettingsSelector";
import PropertyWrapper from "../../components/layout/property-wrapper/property-wrapper";
import Label from "../../components/primitives/label/label";
import TIMEZONES_LIST from "../../constants/timezones";

interface TargetTimezoneProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TimezonePicker({ size }: TargetTimezoneProps) {
  const { t } = useTranslation();
  const { targetTimezone, settingsDispatcher } = useSettingsSelector();

  return (
    <PropertyWrapper firstColumnW="120px" columns={4}>
      <Label size={size} htmlFor="timezone">
        {t("editor.timezone").capitalize()}
      </Label>
      <Select
        id="timezone-picker"
        size={size}
        placeholder="Select option"
        gridColumn={"2 / 5"}
        value={targetTimezone}
        onChange={(e) => {
          settingsDispatcher({
            type: "SETTINGS_ON_CHANGE_TIMEZONE",
            payload: e.target.value,
          });
        }}
        className="theme-font"
        fontSize={"sm !important"}
        borderRadius={"md !important"}
        bg={"white !important"}
        borderColor={"unset !important"}
        border={"unset !important"}
      >
        {TIMEZONES_LIST.map((tz, idx) => {
          return (
            <option key={idx} value={tz}>
              {tz}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
