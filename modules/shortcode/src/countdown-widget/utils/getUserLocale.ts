import once from "lodash.once";

// source: https://www.npmjs.com/package/get-user-locale

// https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/478
interface NavigatorLanguage extends Navigator {
  userLanguage?: string;
  browserLanguage?: string;
  systemLanguage?: string;
}

function uniq(arr: string[]) {
  return arr.filter((el, index, self) => self.indexOf(el) === index);
}

function normalizeLocales(arr: string[]) {
  return arr.map((el) => {
    if (!el || el.indexOf("-") === -1 || el.toLowerCase() !== el) {
      return el;
    }

    const splitEl = el.split("-");
    return `${splitEl[0]}-${splitEl[1].toUpperCase()}`;
  });
}

function getUserLocalesInternal() {
  let languageList: string[] = [];

  if (typeof window !== "undefined") {
    const { navigator }: { navigator: NavigatorLanguage } = window;

    if (navigator.languages) {
      languageList = languageList.concat(navigator.languages);
    }
    if (navigator.language) {
      languageList.push(navigator.language);
    }
    if (navigator.userLanguage) {
      languageList.push(navigator.userLanguage);
    }
    if (navigator.browserLanguage) {
      languageList.push(navigator.browserLanguage);
    }
    if (navigator.systemLanguage) {
      languageList.push(navigator.systemLanguage);
    }
  }

  languageList.push("en-US"); // Fallback

  return normalizeLocales(uniq(languageList));
}

export const getUserLocales = once(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

const getUserLocale = once(getUserLocaleInternal);

export default getUserLocale;
