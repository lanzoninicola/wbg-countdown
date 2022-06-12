import { GoogleFont, Typography } from "../types";

export const GOOGLE_FONTS_LIST: Typography[] = [
  {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  {
    fontFamily: "Montserrat",
    fontWeight: "400",
  },
  {
    fontFamily: "Poppins",
    fontWeight: "400",
  },
  {
    fontFamily: "Lato",
    fontWeight: "400",
  },
  {
    fontFamily: "Roboto Slab",
    fontWeight: "400",
  },
  {
    fontFamily: "Playfair Display",
    fontWeight: "400",
  },
  {
    fontFamily: "Merriweather",
    fontWeight: "400",
  },
  {
    fontFamily: "Lora",
    fontWeight: "400",
  },
  {
    fontFamily: "Lobster",
    fontWeight: "400",
  },
  {
    fontFamily: "Abril Fatface",
    fontWeight: "400",
  },
  {
    fontFamily: "Alfa Slab One",
    fontWeight: "400",
  },
  {
    fontFamily: "Righteous",
    fontWeight: "400",
  },
  {
    fontFamily: "Dancing Script",
    fontWeight: "400",
  },
  {
    fontFamily: "Caveat",
    fontWeight: "400",
  },
  {
    fontFamily: "Sacramento",
    fontWeight: "400",
  },
  {
    fontFamily: "Patrick Hand",
    fontWeight: "400",
  },
];

/** The default font family used by the app and shown in font pickers. */
export const DEFAULT_GOOGLE_FONT: Omit<
  GoogleFont,
  "subsets" | "lastModified" | "version" | "kind"
> = {
  category: "sans-serif",
  family: "Roboto",
  variants: ["400"],
};

/** The API endpoint to load the Google Font Families */
export const GOOGLE_WEBFONTS_API_URL =
  "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha";

/** The root API endpoint for requesting @font-face declarations from Google Fonts. */
export const GOOGLE_FONTS_BASE_URL = `https://fonts.googleapis.com/css2`;
