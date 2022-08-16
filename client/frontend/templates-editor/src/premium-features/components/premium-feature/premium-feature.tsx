import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";

import usePremiumFeaturesContext from "../../provider/hooks/usePremiumFeaturesContext";
import UpgradePremiumModal from "../upgrade-premium-modal/upgrade-premium-modal";
import Watermark from "../watermark/watermark";

interface PremiumFeatureProps {
  children: React.ReactNode;
  hide?: boolean;
  variant?: "watermark" | "modal";
  ctaVariant?: number;
  customText?: string | React.ReactNode;
}

/**
 * Component that wraps the premium feature childre and shows a modal or watermark depending on the props
 *
 * @param {React.ReactNode} children - The react node to handle as a premium feature
 * @param {boolean} hide - Hide the premium feature if true
 * @param {string} variant - The variant of the premium feature to use (watermark or modal)
 * @param {number} ctaVariant - The variant of the cta text to use (1, 2 or 3)
 * @param {string | React.ReactNode} customText - Add a custom text to the modal body if variant is "modal"
 * @returns
 */
export default function PremiumFeature({
  children,
  hide = false,
  variant = "watermark",
  ctaVariant = 1,
  customText,
}: PremiumFeatureProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isPremium } = usePremiumFeaturesContext();

  function mightOpenModal(e: React.SyntheticEvent) {
    e.stopPropagation();

    if (!isPremium && variant === "modal") {
      onOpen();
    }
  }

  if (isPremium) {
    return <>{children}</>;
  }

  if (hide) {
    return null;
  }

  return (
    <>
      <Box
        className="premium-feat-wrapper"
        position={"relative"}
        onClickCapture={(e) => mightOpenModal(e)}
      >
        {children}
        {variant === "watermark" && <Watermark customText={customText} />}
      </Box>
      {variant === "modal" && (
        <UpgradePremiumModal
          isOpen={isOpen}
          onClose={onClose}
          bodyText={customText}
          ctaVariant={ctaVariant}
        />
      )}
    </>
  );
}
