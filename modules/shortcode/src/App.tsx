import { useEffect } from "react";

import TimerSkeleton from "./countdown-widget/components/timer-skeleton/timer-skeleton";
import CountdownWidget from "./countdown-widget/countdown-widget";
import useEditorSettings from "./countdown-widget/hooks/useEditorSettings";
import { CountdownModel } from "./countdown-widget/types";

interface AppProps {
  current: CountdownModel["id"] | null;
}

function App({ current }: AppProps) {
  const { isError, isLoading } = useEditorSettings({
    current: current,
  });

  return <> {isLoading ? <TimerSkeleton /> : <CountdownWidget />}</>;
}

export default App;
