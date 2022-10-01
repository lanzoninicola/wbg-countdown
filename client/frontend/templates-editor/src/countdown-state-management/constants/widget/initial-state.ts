import { WidgetStateData } from "../../types/widget";

const WIDGET_INITIAL_STATE: WidgetStateData = {
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
  isTimerExpired: false,
  actionDispatched: "",
};

export default WIDGET_INITIAL_STATE;
