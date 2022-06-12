import { Input } from "@chakra-ui/react";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function CountdownTitle() {
  return (
    <PropertyWrapper>
      <Label>Text</Label>
      <Input
        size={"xs"}
        type="text"
        title="countdownName"
        name="countdownName"
        placeholder="Last days of discounts"
        gridColumn={"2 / -1"}
      />
    </PropertyWrapper>
  );
}
