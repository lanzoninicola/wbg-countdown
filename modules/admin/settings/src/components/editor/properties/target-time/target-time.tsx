import { Input } from "@chakra-ui/react";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

export default function TargetTime() {
  function onChangeTime(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <PropertyWrapper>
      <Label>Time (hh:mm:ss)</Label>
      <Input
        size={"xs"}
        type="time"
        title="time"
        name="time"
        step="1"
        onChange={onChangeTime}
      />
    </PropertyWrapper>
  );
}
