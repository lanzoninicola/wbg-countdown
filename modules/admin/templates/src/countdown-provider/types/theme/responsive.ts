export type Tokens = "sm" | "md" | "lg";

export type ResponsiveValue = { [token in Tokens]: string };

/** Standard ChakraUI format for responsive values. Eg. ['1rem','1rem','1rem'] */
export type ChackraUIResponsiveValuesWithUnit = string[];
