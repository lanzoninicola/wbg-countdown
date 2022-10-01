export type Templates = Record<string, Template>;

export interface Template {
  name: string;
  style: string;
  image: string;
  fontFamily?: string;
}
