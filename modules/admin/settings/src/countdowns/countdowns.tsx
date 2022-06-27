import useCurrentCountdownSelector from "../countdown-provider/hooks/app/useCurrentCountdownSelector";
import CountdownsPage from "./components/countdown-page/countdowns-page";

/**
 *  This is the main entry point for the countdowns page.
 *
 *  This is a convenience wrapper around the CountdownsPage component,
 *  needed to determine whether or not it should be rendered based on the currentCountDown state
 *  due the position of Context providers in the app.
 */
export default function Countdowns() {
  const { currentCountdown } = useCurrentCountdownSelector();

  return <>{!currentCountdown && <CountdownsPage />}</>;
}
