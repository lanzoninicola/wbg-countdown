import { createContext } from "use-context-selector";
import { CountdownContextData } from "../types";

export const CountdownContext = createContext<CountdownContextData>(
  {} as CountdownContextData
);
