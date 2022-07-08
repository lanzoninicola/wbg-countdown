import useThemeTimerSelector from "../countdown-provider/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../countdown-provider/hooks/theme/useThemeTitleSelector";
import { GoogleFontsLinkTag } from "../countdown-widget-typography/countdown-widget-typography";
import CountdownContainer from "./components/countdown-container/countdown-container";
import CountdownTimer from "./components/countdown-timer/countdown-timer";

export default function CountdownWidget() {
  const { digitFontFamily, digitFontWeight, labelFontFamily, labelFontWeight } =
    useThemeTimerSelector();
  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitleSelector();

  return (
    <>
      <GoogleFontsLinkTag
        googleFonts={[
          { fontFamily: digitFontFamily, fontWeight: digitFontWeight },
          { fontFamily: labelFontFamily, fontWeight: labelFontWeight },
          { fontFamily: titleFontFamily, fontWeight: titleFontWeight },
        ]}
      />
      <CountdownContainer>
        <CountdownTimer />
      </CountdownContainer>
    </>
  );
}
