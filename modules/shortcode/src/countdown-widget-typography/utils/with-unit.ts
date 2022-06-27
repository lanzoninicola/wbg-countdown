/** Appends the unit to a unitless value. Default REM*/
const withUnit = (
  unitlessValue: number,
  options = {
    unit: "rem",
  }
) => `${unitlessValue}${options.unit}`;

export default withUnit;
