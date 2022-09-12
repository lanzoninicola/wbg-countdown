import { createContext } from "use-context-selector";
import { CountdownWidgetContextData } from "../../types";

export const CountdownWidgetContext = createContext<CountdownWidgetContextData>(
  {} as CountdownWidgetContextData
);
