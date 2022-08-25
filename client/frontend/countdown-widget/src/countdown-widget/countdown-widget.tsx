import useThemeLayout from "../countdown-provider/hooks/theme/useThemeLayout";
import useThemeTimerSelector from "../countdown-provider/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../countdown-provider/hooks/theme/useThemeTitleSelector";
import { GoogleFontsLinkTag } from "../countdown-widget-typography/countdown-widget-typography";
import CountdownContainer from "./components/countdown-container/countdown-container";
import Countdown from "./components/countdown";
import "./countdown-widget.css";

export default function CountdownWidget() {
  const { digitFontFamily, digitFontWeight, labelFontFamily, labelFontWeight } =
    useThemeTimerSelector();
  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitleSelector();
  const { fitOnScreen } = useThemeLayout();

  const editorStyle = {
    width: fitOnScreen ? "100%" : "max-content",
  };

  return (
    <div data-role="countdown-widget" style={editorStyle}>
      <GoogleFontsLinkTag
        googleFonts={[
          { fontFamily: digitFontFamily, fontWeight: digitFontWeight },
          { fontFamily: labelFontFamily, fontWeight: labelFontWeight },
          { fontFamily: titleFontFamily, fontWeight: titleFontWeight },
        ]}
      />
      <CountdownContainer>
        <Countdown />
      </CountdownContainer>
    </div>
  );
}
