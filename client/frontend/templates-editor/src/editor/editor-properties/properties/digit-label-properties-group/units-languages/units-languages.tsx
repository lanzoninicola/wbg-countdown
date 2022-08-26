import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useSettingsUnitLabelLng from "../../../../../countdown-provider/hooks/settings/useSettingsUnitLabelLng";
import LANGUAGES from "../../../../../countdown-widget-i18n/constants/languages";
import { Language } from "../../../../../countdown-widget-i18n/types";
import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function UnitsLanguages() {
  const { labelLanguage, setUnitLabelLanguage } = useSettingsUnitLabelLng();
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.digitLabel.labelLanguage")}</Label>
      <Select
        variant="outline"
        size={"xs"}
        gridColumn={"2 / -1"}
        className="theme-font"
        value={labelLanguage}
        onChange={(e) =>
          setUnitLabelLanguage(e.target.value as Language["locale"])
        }
        bg={"white"}
      >
        {LANGUAGES.map((language, idx) => {
          return (
            <option key={idx} value={language.locale}>
              {language.name}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
