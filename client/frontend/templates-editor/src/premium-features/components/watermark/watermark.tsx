import { VStack, Text, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Badge from "../badge/badge";

export default function Watermark() {
  const { t } = useTranslation();
  return (
    <Box
      className="premium-feat-watermark"
      position={"absolute"}
      inset={0}
      zIndex={99}
      backdropFilter={"blur(5px) saturate(0%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack maxW={"350px"}>
        <Badge />
        <Text
          as="p"
          className="theme-font"
          fontWeight={400}
          fontSize={".85rem"}
          color={"black"}
          width={"60char"}
          textAlign={"center"}
        >
          {t("premiumFeatures.additionalText")}
        </Text>
      </VStack>
    </Box>
  );
}
