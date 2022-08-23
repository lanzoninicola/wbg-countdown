import { t } from "i18next";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";

interface TemplatesPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function TemplatesPropertiesGroup({
  showGroupTitle,
  ...props
}: TemplatesPropertiesGroupProps) {
  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.templates.groupTitle")}
      {...props}
    ></PropertyGroupWrapper>
  );
}
