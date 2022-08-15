import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Badge() {
  const { t } = useTranslation();

  return (
    <Box
      bg={"blue.500"}
      paddingInline={"1rem"}
      paddingBlock={".25rem"}
      borderRadius={"20px"}
    >
      <Text
        as="span"
        className="theme-font"
        fontWeight={400}
        letterSpacing={1}
        fontSize={"1rem"}
        color={"white"}
      >
        {t("premiumFeatures.badgeText").toUpperCase()}
      </Text>
    </Box>
  );
}
