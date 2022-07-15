import { act, renderHook } from "@testing-library/react-hooks";
import useCountdown from "./useCountdown";

describe("useCountdown", () => {
  it.todo("should return the remaining time", () => {
    const targetDate = "2022-12-31T23:00";
    const targetTimezone = "Europe/Berlin";

    const { result } = renderHook(() =>
      useCountdown({
        HTMLInputTargetDate: targetDate,
        HTMLInputTargetTimezone: targetTimezone,
      })
    );
  });
});
