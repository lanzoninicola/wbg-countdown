export interface Language {
  // name of the language used for the countdown label
  name: string;
  // locale of the language used for the countdown label (en-US, pt-BR etc...)
  locale: string;
}

export interface WidgetTranslation {
  month: string;
  months: string;
  day: string;
  days: string;
  hour: string;
  hours: string;
  minute: string;
  minutes: string;
  second: string;
  seconds: string;
}

/** Records of the units labels translations in singular and plural */
export type Translation = Record<Language["locale"], WidgetTranslation>;
