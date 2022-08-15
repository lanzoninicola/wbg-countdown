import { Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function BecomePremiumButton() {
  const { t } = useTranslation();

  return (
    <Link href="https://clockdown.io/pricing" isExternal>
      {t("premiumFeatures.buttonText")}
    </Link>
  );
}
