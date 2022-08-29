import { createContext } from "use-context-selector";
import { CountdownContextDataWithDispatch } from "../types";

export const CountdownContext = createContext<CountdownContextDataWithDispatch>(
  {} as CountdownContextDataWithDispatch
);
