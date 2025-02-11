// UI elements strings json file for new languages
import { createRequire } from "node:module";

const enStrings = createRequire(import.meta.url)("./strings/en.json");
/**
 * Start adding new languages by making a new language object inside the array
 *
 * @see file://./README.md#add-a-new-language
 */
const languages = [
  {
    display: "Türkçe", // Name of the language displayed in UI
    name: "Turkish", // Name of the language in English, used by OpenAI translation
    code: "tr", // 2 letter language code (ISO 639‑1)
    strings: trStrings, // JSON object of translated UI element strings
  }
];

const i18n_strs = languages.reduce((langs, currentLang) => {
  langs[currentLang.code] = currentLang.strings;
  return langs;
}, {});

const get_i18n_str = (langCode = "en", key, fallbackStr) => {
  const engStr = enStrings[key] || fallbackStr;
  if (langCode === "en") return engStr;
  return i18n_strs[langCode][key] || engStr;
};

export { languages, get_i18n_str };
