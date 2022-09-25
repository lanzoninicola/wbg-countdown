import { Box, Tooltip } from "@chakra-ui/react";
import { useThemeLayoutSelector } from "../../../../../../countdown-state-management";

import {
  TEMPLATES,
  TEMPLATES_BASE_ASSET_PATH,
} from "../../constants/templates";

interface TemplateProps {
  src: string;
  alt: string;
  /** The name of template */
  name: keyof typeof TEMPLATES;
}

export default function TemplateView({ src, alt, name }: TemplateProps) {
  const { themeDispatcher } = useThemeLayoutSelector();

  return (
    <Tooltip label={name} placement="top">
      <Box
        maxW="300px"
        cursor={"pointer"}
        onClick={() => {
          themeDispatcher({
            type: "THEME_TEMPLATE_ON_CHANGE_TEMPLATE",
            payload: {
              name,
              style: TEMPLATES[name.toLowerCase()].style,
            },
          });
        }}
      >
        <img src={`${TEMPLATES_BASE_ASSET_PATH}${src}.jpg`} alt={alt} />
      </Box>
    </Tooltip>
  );
}
