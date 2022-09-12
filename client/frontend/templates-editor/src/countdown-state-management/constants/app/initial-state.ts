import { AppStateData } from "../../types/app";

const APP_INITIAL_STATE: AppStateData = {
  currentCountdown: null,
  currentToken: "lg",
  isEditorMode: false,
  timerExpired: false,
  fontSizeUnit: "px",
  productPublicWebsiteURL: "",
};

export default APP_INITIAL_STATE;
