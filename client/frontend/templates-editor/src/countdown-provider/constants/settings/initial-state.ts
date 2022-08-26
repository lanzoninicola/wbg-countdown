import { SettingsStateData } from "../../types/settings";

const SETTINGS_INITIAL_STATE: SettingsStateData = {
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

export default SETTINGS_INITIAL_STATE;
