import { ConfigStateData } from "../types/config";
import { ConfigStateAction } from "../types/config/actions";

export default function configReducer(
  state: ConfigStateData,
  action: ConfigStateAction
): ConfigStateData {
  switch (action.type) {
    case "CONFIG_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
