import { useEffect } from "react";

import useAppSelector from "../countdown-state-management/hooks/app/useAppSelector";
import Editor from "./components/editor/editor";

export default function EditorPage() {
  const { currentCountdown, appDispatcher } = useAppSelector();

  useEffect(() => {
    appDispatcher({
      type: "APP_ON_CHANGE_IS_EDITOR_MODE_FLAG",
      payload: true,
    });
  }, []);

  return <Editor />;
}
