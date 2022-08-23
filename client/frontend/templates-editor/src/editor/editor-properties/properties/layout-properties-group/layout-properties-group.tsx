import { useTranslation } from "react-i18next";
import useThemeLayout from "../../../../countdown-provider/hooks/theme/useThemeLayout";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import BackgroundColorSelector from "./background-color-selector/background-color-selector";
import BackgroundTransparentSelector from "./background-transparent-selector/background-transparent-selector";
import GapSelector from "./gap-selector/gap-selector";
import LayoutOrientation from "./layout-orientation/layout-orientation";
import StretchSelector from "./stretch-selector/stretch-selector";

interface LayoutPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function LayoutPropertiesGroup({
  showGroupTitle,
  ...props
}: LayoutPropertiesGroupProps) {
  const { orientation } = useThemeLayout();
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.layout.groupTitle")}
      {...props}
    >
      <LayoutOrientation orientationSelected={orientation} />
      <GapSelector />
      {orientation === "horizontal" && <StretchSelector />}
      <BackgroundTransparentSelector />
      <BackgroundColorSelector />
    </PropertyGroupWrapper>
  );
}
