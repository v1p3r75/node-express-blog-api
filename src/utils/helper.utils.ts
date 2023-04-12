import { lang } from "../lang/index.lang";
import { Lang } from "../types/Generals.type";

/**
 * Retrieves the value of an environment variable based on the provided key.
 * If the environment variable is not set, it returns the provided defaultValue.
 *
 * @param {string} key - The key of the environment variable to retrieve.
 * @param {string | number} defaultValue - The default value to return if the environment variable is not set. Defaults to an empty string ('').
 * @returns {string} - The value of the environment variable, or the defaultValue if not set.
 */
export const getEnv = (key: string, defaultValue: string | number = '') => {
    
    return process.env?.[key] ?? defaultValue.toString();
}

/**
 * Retrieves a localized string based on the provided key and current language.
 * The current language is determined by the 'APP_LANG' environment variable,
 * which defaults to 'fr' (French) if not set.
 * If the localized string for the key and current language is not found,
 * it returns the provided defaultValue.
 *
 * @param {string} key - The key of the localized string to retrieve.
 * @param {string | number} defaultValue - The default value to return if the localized string is not found. Defaults to an empty string ('').
 * @returns {string} - The localized string, or the defaultValue if not found.
 */
export const _ = (key: string, defaultValue: string | number = '') => {
    const currentLang = getEnv('APP_LANG', 'fr').toLowerCase() as Lang;
    return lang[currentLang]?.[key] ?? String(defaultValue);
}
