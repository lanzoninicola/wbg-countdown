import { act, renderHook } from "@testing-library/react-hooks";
import useCountdown from "./useCountdown";

describe("useCountdown", () => {
  it("should return the remaining time", () => {
    const targetDate = "2022-12-31T23:00";
    const targetTimezone = "Europe/Berlin";

    const { result } = renderHook(() => useCountdown());
    expect(result.current).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});
