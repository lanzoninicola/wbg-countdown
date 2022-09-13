import useThemeLayout from "../countdown-state-management/hooks/theme/useThemeLayout";
import useThemeTimerSelector from "../countdown-state-management/hooks/theme/useThemeTimerSelector";
import useThemeTitleSelector from "../countdown-state-management/hooks/theme/useThemeTitleSelector";
import { GoogleFontsLinkTag } from "../countdown-widget-typography/countdown-widget-typography";
import CountdownContainer from "./components/countdown-container/countdown-container";
import Countdown from "./components/countdown";
import "./countdown-widget.css";
import useAppContext from "../countdown-state-management/hooks/app/useAppContext";
import CountdownLinkWrapper from "./components/countdown-link-wrapper/countdown-link-wrapper";

export default function CountdownWidget() {
  const {
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitLabelFontFamily,
    unitLabelFontWeight,
  } = useThemeTimerSelector();
  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitleSelector();
  const { fitOnScreen } = useThemeLayout();

  const editorStyle = {
    width: fitOnScreen ? "100%" : "max-content",
  };

  const csslongstyle = `div[data-element="countdown-widget"] {
    background: red;
    border-radius: 10px;
  }
    `;

  return (
    <CountdownLinkWrapper>
      <div data-element="countdown-widget" style={editorStyle}>
        <GoogleFontsLinkTag
          googleFonts={[
            {
              fontFamily: unitNumberFontFamily,
              fontWeight: unitNumberFontWeight,
            },
            {
              fontFamily: unitLabelFontFamily,
              fontWeight: unitLabelFontWeight,
            },
            { fontFamily: titleFontFamily, fontWeight: titleFontWeight },
          ]}
        />
        <CountdownContainer>
          <Countdown />
        </CountdownContainer>
        <style>{csslongstyle}</style>
      </div>
    </CountdownLinkWrapper>
  );
}
