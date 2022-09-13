import { Box } from "@chakra-ui/react";
import { t } from "i18next";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import monospace from "./asset/monospace.jpg";

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
    >
      <Box maxW="300px">
        <img src={monospace} alt="monospace template" />
      </Box>
    </PropertyGroupWrapper>
  );
}
