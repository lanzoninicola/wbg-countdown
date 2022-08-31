import { useTranslation } from "react-i18next";

import useThemeLayoutSelector from "../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";
import { PremiumFeatureGuard } from "../../../../premium-features";
import BackgroundColor from "../../components/common/background-color/background-color";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import CheckboxSingleOption from "../../components/primitives/checkbox-single-option/checkbox-single-option";
import GapSelector from "./gap-selector/gap-selector";
import LayoutOrientation from "./layout-orientation/layout-orientation";

interface LayoutPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function LayoutPropertiesGroup({
  showGroupTitle,
  ...props
}: LayoutPropertiesGroupProps) {
  const {
    orientation,
    fitOnScreen,
    transparentBackground,
    backgroundColor,
    themeDispatcher,
  } = useThemeLayoutSelector();
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.layout.groupTitle")}
      {...props}
    >
      <LayoutOrientation orientationSelected={orientation} />
      {orientation === "horizontal" && (
        <CheckboxSingleOption
          id="fit-on-screen-checker"
          label={t("editor.propertiesGroup.layout.stretchProp")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_FIT_ON_SCREEN",
              payload: checked,
            });
          }}
          value={fitOnScreen}
        />
      )}
      {fitOnScreen && <GapSelector />}

      <CheckboxSingleOption
        id="transparent-background-checker"
        label={t("editor.propertiesGroup.layout.transparentProp")}
        onChange={(checked) => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT",
            payload: checked,
          });
        }}
        value={transparentBackground}
      />
      <PremiumFeatureGuard variant="modal">
        <BackgroundColor
          colorSelected={backgroundColor}
          onColorSelected={(color) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR",
              payload: color,
            });
          }}
          label={t("editor.propertiesGroup.layout.backgroundColorProp")}
        />
      </PremiumFeatureGuard>
    </PropertyGroupWrapper>
  );
}
