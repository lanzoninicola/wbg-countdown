import { ConfigStateData } from ".";

interface ConfigInitStateAction {
  type: "EDITOR_INIT_STATE";
  payload: ConfigStateData;
}

export type ConfigStateAction = ConfigInitStateAction;
