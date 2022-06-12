import { Grid } from "@chakra-ui/react";
import useCounterSelector from "../../context/hooks/useCounterSelector";

import useCountdownService from "../../services/useCountdownService";
import Digit from "./digit/digit";

export default function Counter() {
  const { digitFontSize, digitFontFamily, digitFontColor, lastDigitColor } =
    useCounterSelector();

  const [days, hours, minutes, seconds] = useCountdownService();

  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two digits

  return (
    <Grid
      gridTemplateColumns={"1fr .1fr 1fr .1fr 1fr .1fr 1fr"}
      gridTemplateRows={"auto"}
      style={{
        fontSize: digitFontSize,
        fontFamily: digitFontFamily,
        color: digitFontColor,
      }}
    >
      <Digit value={days} label={"Days"} isDanger={days <= 3} />
      <span>:</span>
      <Digit value={hours} label={"Hours"} isDanger={false} />
      <span>:</span>
      <Digit value={minutes} label={"Mins"} isDanger={false} />
      <span>:</span>
      <Digit value={seconds} label={"Seconds"} isDanger={false} />
    </Grid>
  );
}
