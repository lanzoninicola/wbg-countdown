import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";

export default function useRuntimeEnvSelector() {
  const runtimeEnv = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.runtimeEnv
  );

  const setRuntimeEnv = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.setRuntimeEnv
  );

  return {
    runtimeEnv,
    setRuntimeEnv,
  };
}
