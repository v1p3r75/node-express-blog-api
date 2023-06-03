import { lang } from "../lang/index.lang";
import { Lang } from "../types/generals.type";


export const getEnv = (key: string, defaultValue: string | number = '') => {
    
    return process.env?.[key] ?? defaultValue.toString();
}

export const _ = (key: string, defaultValue: string | number = '') => {

    const currentLang = getEnv('APP_LANG', 'fr').toLowerCase() as Lang;
    return lang[currentLang]?.[key] ?? String(defaultValue);
}

export const sendMessageByEnv = (message : string = '') => {

    if (getEnv('NODE_ENV') === 'development') {
        return message;
    }

    return "Internal Server Error";
}