import { VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useThemeLayoutSelector from "../../../../../countdown-provider/hooks/theme/useThemeLayoutSelector";
import Teext from "../../../../../global/common/layout/teext/teext";
import RingLight from "../../../../../global/common/ring-light/ring-light";
import horizontalLayout from "./assets/images/horizontal-layout.png";
import verticalLayout from "./assets/images/vertical-layout.png";
import Label from "../label/label";
import OptionContainer from "./option-container/option-container";

export default function LayoutPicker() {
  const { t } = useTranslation();
  const { orientation, setOrientation } = useThemeLayoutSelector();

  return (
    <VStack alignItems={"flex-start"} gap={0}>
      <OptionContainer onClick={() => setOrientation("vertical")}>
        <Label textTransform={"uppercase"} pl={0}>
          {t("editor.propertiesGroup.layout.vertical.title")}
        </Label>
        <Teext fontSize={"xs"}>
          {t("editor.propertiesGroup.layout.vertical.description")}
        </Teext>
        <RingLight isVisible={orientation === "vertical"}>
          <img src={verticalLayout} alt="vertical layout" />
        </RingLight>
      </OptionContainer>
      <OptionContainer onClick={() => setOrientation("horizontal")}>
        <Label textTransform={"uppercase"} pl={0}>
          {t("editor.propertiesGroup.layout.horizontal.title")}
        </Label>
        <Teext fontSize={"xs"}>
          {t("editor.propertiesGroup.layout.horizontal.description")}
        </Teext>
        <RingLight isVisible={orientation === "horizontal"}>
          <img src={horizontalLayout} alt="horizontal layout" />
        </RingLight>
      </OptionContainer>
    </VStack>
  );
}
