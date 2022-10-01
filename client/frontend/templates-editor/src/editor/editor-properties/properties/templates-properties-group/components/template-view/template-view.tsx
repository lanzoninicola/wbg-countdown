import { Box, Tooltip } from "@chakra-ui/react";
import { useThemeLayoutWithDispatcher } from "../../../../../../countdown-state-management";
import useThemeTitle from "../../../../../../countdown-state-management/common/hooks/theme/useThemeTitle";
import useThemeTitleWithDispatcher from "../../../../../../countdown-state-management/common/hooks/theme/useThemeTitleWithDispatcher";

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
  const { themeDispatcher } = useThemeLayoutWithDispatcher();

  return (
    <Tooltip label={name} placement="top">
      <Box
        maxW="300px"
        cursor={"pointer"}
        onClick={() => {
          const template = TEMPLATES[name.toLowerCase()];

          themeDispatcher({
            type: "THEME_TEMPLATE_ON_CHANGE_TEMPLATE",
            payload: {
              name,
              style: template.style,
            },
          });

          if (template?.fontFamily) {
            themeDispatcher({
              type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY",
              payload: template.fontFamily,
            });
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY",
              payload: template.fontFamily,
            });
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY",
              payload: template.fontFamily,
            });
          }
        }}
      >
        <img src={`${TEMPLATES_BASE_ASSET_PATH}${src}.jpg`} alt={alt} />
      </Box>
    </Tooltip>
  );
}
