import { createContext } from "use-context-selector";
import { ConfigContextData } from "../../types/config";

export const ConfigContext = createContext<ConfigContextData>(
  {} as ConfigContextData
);
