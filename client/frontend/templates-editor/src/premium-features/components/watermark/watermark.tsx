import { VStack, Text, Box, HStack, Grid } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AnchorBox from "../common/anchor-box/anchor-box";
import PremiumFeatureCockade from "../common/premium-feature-cockade/premium-feature-cockade";
import PremiumFeatureIcon from "../common/premium-feature-icon/premium-feature-icon";
import UpgradePremiumBadge from "../common/upgrade-premium-badge/upgrade-premium-badge";
import UpgradePremiumButton from "../common/upgrade-premium-button/upgrade-premium-button";

interface WatermarkProps {
  customText?: string | React.ReactNode;
}

export default function Watermark({ customText }: WatermarkProps) {
  const { t } = useTranslation();
  return (
    <AnchorBox backdropFilter={"blur(5px) saturate(0%)"}>
      <Grid
        gridTemplateColumns={"1fr auto"}
        bg="white"
        borderRadius={"10px"}
        p="1rem"
        maxW={"75%"}
        gap={8}
        boxShadow={"xl"}
      >
        <PremiumFeatureCockade />
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
    </AnchorBox>
  );
}
