import { AppStateData } from ".";

interface AppInitStateAction {
  type: "APP_INIT_STATE";
  payload: AppStateData;
}

export type AppStateAction = AppInitStateAction;
