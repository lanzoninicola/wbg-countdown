import { createContext } from "use-context-selector";
import { WidgetContextData } from "../../types";

export const WidgetContext = createContext<WidgetContextData>(
  {} as WidgetContextData
);
