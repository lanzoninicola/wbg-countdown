import { t } from "i18next";
import useThemeLayout from "../../../../countdown-provider/hooks/theme/useThemeLayout";
import useThemeLayoutSelector from "../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import LayoutOrientation from "./layout-orientation/layout-orientation";

interface LayoutPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function LayoutPropertiesGroup({
  showGroupTitle,
  ...props
}: LayoutPropertiesGroupProps) {
  const { orientation } = useThemeLayout();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.layout.groupTitle")}
      {...props}
    >
      <LayoutOrientation orientationSelected={orientation} />
    </PropertyGroupWrapper>
  );
}
