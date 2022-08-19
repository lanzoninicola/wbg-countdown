import { VStack } from "@chakra-ui/react";
import horizontalLayout from "../../assets/images/horizontal-layout.png";
import verticalLayout from "../../assets/images/vertical-layout.png";
import Label from "../../components/primitives/label/label";
import OptionContainer from "./option-container/option-container";

export default function LayoutPicker() {
  return (
    <VStack alignItems={"flex-start"} gap={8}>
      <OptionContainer>
        <Label>Vertical Layout</Label>
        <img src={verticalLayout} alt="vertical layout" />
      </OptionContainer>
      <OptionContainer>
        <Label>Horizontal Layout</Label>
        <img src={horizontalLayout} alt="horizontal layout" />
      </OptionContainer>
    </VStack>
  );
}
