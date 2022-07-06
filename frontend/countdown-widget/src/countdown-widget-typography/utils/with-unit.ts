import { FontsizeUnit } from "../../countdown-provider/types/theme/responsive";

/** Appends the unit to a unitless value. */
const withUnit = (unitlessValue: number, unit: FontsizeUnit) =>
  `${unitlessValue}${unit}`;

export default withUnit;
