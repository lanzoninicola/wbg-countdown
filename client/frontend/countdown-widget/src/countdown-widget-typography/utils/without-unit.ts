import { FontSizeWithUnit } from "../../countdown-state-management/types/theme/responsive";

type Unit = "px" | "rem" | "em";

export default function withoutUnit(value: FontSizeWithUnit, unit: Unit) {
  return Number(value.replace(`${unit}`, ""));
}
