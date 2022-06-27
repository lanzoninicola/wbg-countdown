export interface CallerPosition {
  top: number;
  left?: number;
}

export interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files?: Record<string, string>;
  category: string;
  kind: string;
}

/**
export interface GoogleWebFontResponse {
  kind: string;
  items: GoogleFont[];
}
*/
