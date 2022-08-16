import { Box, useDisclosure } from "@chakra-ui/react";

import usePremiumFeaturesContext from "../../provider/hooks/usePremiumFeaturesContext";
import PremiumFeatureModal from "../modal/premium-feature-modal";
import Watermark from "../watermark/watermark";

interface PremiumFeatureProps {
  children: React.ReactNode;
  hide?: boolean;
  variant?: "watermark" | "modal";
  /** Add a custom text to the modal body */
  customText?: string | React.ReactNode;
}

export default function PremiumFeature({
  children,
  hide = false,
  variant = "watermark",
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
        <PremiumFeatureModal
          isOpen={isOpen}
          onClose={onClose}
          bodyText={customText}
        />
      )}
    </>
  );
}
