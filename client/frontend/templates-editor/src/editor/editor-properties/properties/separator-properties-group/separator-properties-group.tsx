import { useTranslation } from "react-i18next";

import useThemeTimerSelector from "../../../../countdown-provider/hooks/theme/useThemeTimerSelector";
import { PremiumFeature } from "../../../../premium-features";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import CheckboxSingleOption from "../../components/primitives/checkbox-single-option/checkbox-single-option";
import SeparatorChar from "./separator-char/separator-char";

interface SeparatorPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function SeparatorPropertiesGroup({
  showGroupTitle,
  ...props
}: SeparatorPropertiesGroupProps) {
  const { t } = useTranslation();
  const { showSeparator, separatorChar, themeDispatcher } =
    useThemeTimerSelector();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.separator.groupTitle")}
      {...props}
    >
      <PremiumFeature variant="modal">
        <CheckboxSingleOption
          id="show-separator-checker"
          label={t("editor.propertiesGroup.separator.showSeparatorLabel")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_VISIBILITY_SECONDS",
              payload: checked,
            });
          }}
          value={showSeparator}
        />
      </PremiumFeature>
      <PremiumFeature variant="modal">
        <SeparatorChar
          showSeparator={showSeparator}
          separatorChar={separatorChar}
          onChangeSeparatorChar={(separatorChar) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_SEPARATOR_CHAR",
              payload: separatorChar,
            });
          }}
        />
      </PremiumFeature>
    </PropertyGroupWrapper>
  );
}
