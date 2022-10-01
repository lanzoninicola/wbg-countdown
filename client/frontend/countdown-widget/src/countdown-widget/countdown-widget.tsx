import Countdown from "./components/countdown";
import CountdownWidgetGoogleFontTag from "./components/countdown-widget-google-font-tag/countdown-widget-google-font-tag";
import CountdownWidgetLink from "./components/countdown-widget-link/countdown-widget-link";
import CountdownWidgetStyleTag from "./components/countdown-widget-style-tag/countdown-widget-style-tag";

export default function CountdownWidget() {
  return (
    <CountdownWidgetLink>
      <div data-element="countdown-widget">
        <CountdownWidgetGoogleFontTag />
        <div data-element="countdown-container">
          <Countdown />
        </div>
        <CountdownWidgetStyleTag />
      </div>
    </CountdownWidgetLink>
  );
}
