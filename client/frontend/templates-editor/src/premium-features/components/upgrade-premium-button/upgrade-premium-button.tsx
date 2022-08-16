import { Box, HStack, Link, Text, TypographyProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import usePremiumFeaturesLandingURLSelector from "../../provider/hooks/usePremiumFeaturesLandingURLSelector";

//TODO: Track the click event action in analytics

interface UpgradePremiumButtonProps {
  textVariant?: number;
  alternativeText?: string;
  fontSize?: TypographyProps["fontSize"];
}

const UpgradePremiumButton = forwardRef(
  (
    { textVariant = 1, alternativeText, fontSize }: UpgradePremiumButtonProps,
    ref: any
  ) => {
    const { t } = useTranslation();
    const landingPageUrl = usePremiumFeaturesLandingURLSelector();

    if (textVariant > 4) {
      textVariant = 1;
    }

    return (
      <Link
        href={landingPageUrl}
        isExternal
        ref={ref}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box
          bg={"blue.500"}
          paddingInline={"1rem"}
          paddingBlock={".25rem"}
          borderRadius={"20px"}
        >
          <HStack>
            <Text
              as="span"
              className="theme-font"
              fontWeight={400}
              letterSpacing={1}
              fontSize={fontSize || "1rem"}
              color={"white"}
            >
              {alternativeText ||
                t(
                  `premiumFeatures.upgradeCTA.variant${textVariant}`
                ).toUpperCase()}
            </Text>
            <BiLinkExternal color="white" />
          </HStack>
        </Box>
      </Link>
    );
  }
);

export default UpgradePremiumButton;
