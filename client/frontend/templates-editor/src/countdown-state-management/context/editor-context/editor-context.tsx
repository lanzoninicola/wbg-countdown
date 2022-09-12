import { createContext } from "use-context-selector";
import { EditorContextDataWithDispatch } from "../../types";

export const EditorContext = createContext<EditorContextDataWithDispatch>(
  {} as EditorContextDataWithDispatch
);
