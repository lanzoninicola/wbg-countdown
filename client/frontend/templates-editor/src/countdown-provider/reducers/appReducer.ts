import { AppStateData } from "../types/app";
import { AppStateAction } from "../types/app/actions";

export default function appReducer(
  state: AppStateData,
  action: AppStateAction
): AppStateData {
  switch (action.type) {
    case "APP_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
