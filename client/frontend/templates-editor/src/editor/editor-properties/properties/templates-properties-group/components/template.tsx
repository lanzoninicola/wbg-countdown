import { Box, Tooltip } from "@chakra-ui/react";
import useThemeContext from "../../../../../countdown-state-management/hooks/theme/useThemeContext";
import TEMPLATE_STYLES from "../constants/template-styles";

interface TemplateProps {
  src: string;
  alt: string;
  /** The name of template */
  name: string;
}

export default function Template({ src, alt, name }: TemplateProps) {
  const {} = useThemeContext();

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
              style: TEMPLATE_STYLES[name as keyof typeof TEMPLATE_STYLES],
            },
          });
        }}
      >
        <img src={src} alt={alt} />
      </Box>
    </Tooltip>
  );
}
