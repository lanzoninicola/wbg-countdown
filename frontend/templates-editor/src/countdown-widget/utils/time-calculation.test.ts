import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

describe("Testing the diff function", () => {
  const targetLocalTime = dayjs.tz("2022-12-31T23:00", "Europe/Berlin");

  it("should return the remaining time", () => {
    console.log(targetLocalTime);
  });
});

export {};
