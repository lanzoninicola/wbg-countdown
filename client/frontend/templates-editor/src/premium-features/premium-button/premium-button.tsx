import {
  BackgroundProps,
  BorderProps,
  Box,
  ColorProps,
  CSSObject,
  HStack,
  Link,
  Text,
  TypographyProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import useProductLandingPageURL from "../hooks/useProductLandingPageURL";
import { IconBaseProps } from "@react-icons/all-files";

interface PremiumButtonProps {
  textVariant?: number;
  alternativeText?: string;
  fontSize?: TypographyProps["fontSize"];
  fontWeight?: TypographyProps["fontWeight"];
  letterSpacing?: TypographyProps["letterSpacing"];
  uppercase?: boolean;
  backgroundColor?: BackgroundProps["bg"];
  bg?: BackgroundProps["bg"];
  color?: ColorProps["color"];
  iconColor?: IconBaseProps["color"];
  borderColor?: BorderProps["borderColor"];
  borderWidth?: BorderProps["borderWidth"];
  _hover?: CSSObject | undefined;
  [key: string]: any;
}

/**
 * Renders a button that links to the premium version of the plugin.
 * @param textVariant The variant of the text to display. 1: "Upgrade to Premium now", 2: "Take a look at the features", 3: "Unlock all the features", 4: "Increase your sales"
 */
// eslint-disable-next-line react/display-name
const PremiumButton = forwardRef(
  (
    {
      textVariant = 1,
      alternativeText,
      letterSpacing,
      fontSize,
      fontWeight,
      uppercase = true,
      backgroundColor,
      bg,
      color,
      iconColor,
      borderColor,
      borderWidth,
      _hover,
      ...props
    }: PremiumButtonProps,
    ref: any
  ) => {
    const { t } = useTranslation();
    const landingPageUrl = useProductLandingPageURL();

    if (textVariant > 4) {
      textVariant = 1;
    }

    const text =
      alternativeText ||
      t(`premiumFeatures.upgradeCTA.variant${textVariant}`) ||
      "Upgrade to premium";

    return (
      <Link
        href={landingPageUrl}
        isExternal
        ref={ref}
        bg={bg || backgroundColor || "yellow.300"}
        borderRadius={"20px"}
        borderColor={borderColor || "black"}
        borderWidth={borderWidth || "thin"}
        paddingInline={"1rem"}
        paddingBlock={"0.25rem"}
        width="max-content"
        transition="all 0.2s ease-in-out"
        display={"flex"}
        alignItems={"center"}
        height={"max-content"}
        {...props}
        _hover={{
          textDecoration: "none",
          ..._hover,
        }}
      >
        <HStack>
          <Text
            as="span"
            className="theme-font"
            fontWeight={fontWeight || 600}
            letterSpacing={letterSpacing || 1}
            fontSize={fontSize || "md"}
            color={color || "black"}
          >
            {uppercase ? text.toUpperCase() : text}
          </Text>
          <BiLinkExternal color={iconColor || "black"} />
        </HStack>
      </Link>
    );
  }
);

export default PremiumButton;
