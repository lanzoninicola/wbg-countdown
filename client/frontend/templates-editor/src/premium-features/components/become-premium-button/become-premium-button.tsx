import { Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Badge from "../badge/badge";

//TODO: Track the click event action in analytics

export default function BecomePremiumButton() {
  const { t } = useTranslation();

  return (
    <Link href="https://clockdown.io/pricing" isExternal>
      <Badge>{t("premiumFeatures.buttonText").toUpperCase()}</Badge>
    </Link>
  );
}
