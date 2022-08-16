import { VStack, Text, Box, HStack, Grid } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PremiumFeatureIcon from "../premium-feature-icon/premium-feature-icon";
import UpgradePremiumBadge from "../upgrade-premium-badge/upgrade-premium-badge";
import UpgradePremiumButton from "../upgrade-premium-button/upgrade-premium-button";

interface WatermarkProps {
  customText?: string | React.ReactNode;
}

export default function Watermark({ customText }: WatermarkProps) {
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
      <Grid
        gridTemplateColumns={"1fr auto"}
        bg="white"
        borderRadius={"10px"}
        p="1rem"
        maxW={"75%"}
        gap={8}
        boxShadow={"xl"}
      >
        <PremiumFeatureIcon />
        <VStack alignItems={"flex-start"}>
          <Text
            as="p"
            className="theme-font"
            fontWeight={400}
            fontSize={".85rem"}
            color={"black"}
          >
            {customText || t("premiumFeatures.additionalText")}
          </Text>
          <UpgradePremiumButton fontSize={".75rem"} />
        </VStack>
      </Grid>
    </Box>
  );
}
