export type ChakraToken = "sm" | "md" | "lg";

export type ResponsiveValue = { [token in ChakraToken]: string };

/** Standard ChakraUI format for responsive values. Eg. ['1rem','1rem','1rem'] */
export type ChakraResponsiveValuesWithUnit = string[];
