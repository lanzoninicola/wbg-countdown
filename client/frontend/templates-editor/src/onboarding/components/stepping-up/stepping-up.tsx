import { Box } from "@chakra-ui/react";
import steppingUp from "../../assets/images/stepping-up.png";

export default function SteppingUpImage() {
  return <Box bgImage={`url(${steppingUp})`} bgSize={"150px"}></Box>;
}
