import { Box, Tooltip } from "@chakra-ui/react";
import Teext from "../../../../../../global/common/layout/teext/teext";

import {
  TEMPLATES,
  TEMPLATES_BASE_ASSET_PATH,
} from "../../constants/templates";

interface TemplateProps {
  src: string;
  alt: string;

  /** The name of template */
  name: keyof typeof TEMPLATES;
  /** The ID of template */
  id: string;
}

export default function TemplateView({ src, alt, name, id }: TemplateProps) {
  return (
    <Tooltip label={name} placement="left">
      <Box
        data-element="template-view-box"
        w={"100%"}
        h={"100%"}
        cursor={"pointer"}
      >
        <img src={`${TEMPLATES_BASE_ASSET_PATH}${src}.jpg`} alt={alt} />
      </Box>
    </Tooltip>
  );
}
