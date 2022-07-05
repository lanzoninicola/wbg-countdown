import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../../context/countdown-context";
import { Tokens } from "../../types/theme/responsive";

/** This returns the current token ("sm", "md", "lg", "xl", "xxl") selected by the user in the editor */
export default function useCurrentTokenSelector() {
  const currentToken: Tokens = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.currentToken
  );

  const setCurrentToken = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.app.setCurrentToken
  );

  return {
    currentToken,
    setCurrentToken,
  };
}
