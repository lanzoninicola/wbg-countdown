import { FaLaptop } from "@react-icons/all-files/fa/FaLaptop";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaTabletAlt } from "@react-icons/all-files/fa/FaTabletAlt";
import { useTranslation } from "react-i18next";

import useAppContext from "../../../../countdown-provider/hooks/app/useAppContext";
import BoxRadiusLg from "../../../layout/box-radius-lg/box-radius-lg";
import TokenButton from "./components/token-button";

interface BreakpointsBarProps {
  onClickDesktop: () => void;
  onClickTablet: () => void;
  onClickMobile: () => void;
}

export default function BreakpointsBar({
  onClickDesktop,
  onClickTablet,
  onClickMobile,
}: BreakpointsBarProps) {
  const { currentToken } = useAppContext();
  const { t } = useTranslation();

  return (
    <BoxRadiusLg>
      <TokenButton
        label={t("global.desktop")}
        icon={<FaLaptop />}
        onClick={onClickDesktop}
        isActive={currentToken === "lg"}
      />
      <TokenButton
        label={t("global.tablet")}
        icon={<FaTabletAlt />}
        onClick={onClickTablet}
        isActive={currentToken === "md"}
      />
      <TokenButton
        label={t("global.mobile")}
        icon={<FaMobileAlt />}
        onClick={onClickMobile}
        isActive={currentToken === "sm"}
      />
    </BoxRadiusLg>
  );
}
