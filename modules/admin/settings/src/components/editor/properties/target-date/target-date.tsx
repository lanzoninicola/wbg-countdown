import { Input } from "@chakra-ui/react";
import "../../../../style/global.css";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function TargetDate() {
  function onChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <PropertyWrapper>
      <Label>Target Date</Label>
      <Input
        size={"xs"}
        type="datetime-local"
        id="target-date"
        name="target-date"
        onChange={onChangeDate}
        gridColumn={"2 / -1"}
      />
    </PropertyWrapper>
  );
}
