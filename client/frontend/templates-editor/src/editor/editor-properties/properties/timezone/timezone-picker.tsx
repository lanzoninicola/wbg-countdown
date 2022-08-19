import { Select, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useSettingsContext from "../../../../countdown-provider/hooks/settings/useSettingsContext";
import TIMEZONES_LIST from "../../constants/timezones";
import PropertyWrapper from "../../components/layout/property-wrapper/property-wrapper";
import Label from "../../components/primitives/label/label";

interface TargetTimezoneProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TimezonePicker({ size }: TargetTimezoneProps) {
  const { t } = useTranslation();
  const { targetTimezone, setTargetTimezone } = useSettingsContext();

  function onChangeTimezone(e: React.ChangeEvent<HTMLSelectElement>) {
    setTargetTimezone(e.target.value);
  }

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
        onChange={onChangeTimezone}
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
