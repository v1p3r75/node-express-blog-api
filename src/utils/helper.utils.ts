import { lang } from "../lang/index.lang";
import { Lang } from "../types/generals.type";
import { Response } from "express";


export const getEnv = (key: string, defaultValue: string | number = '') => {

    return process.env?.[key] ?? defaultValue.toString();
}

export const _ = (key: string, defaultValue: string | number = '') => {

    const currentLang = getEnv('APP_LANG', 'fr').toLowerCase() as Lang;
    return lang[currentLang]?.[key] ?? String(defaultValue);
}

export const sendMessageByEnv = (message: string = '') => {

    if (getEnv('NODE_ENV') === 'development') {
        return message;
    }

    return "Internal Server Error";
}

export class ApiResponse {

    static success(res: Response, message: string = 'Request Succeful', data: Array<any> = [], code = 200) {

        return res.status(code).json({ status: true, message, data })
    }

    static error(res: Response, message: string = 'Request failed', errors: Array<any> = [], code = 500) {

        return res.status(code).json({ status: false, message, errors })
    }

    static handleResult(res: Response, result: any, successMsg : string, successCode : number = 200) {

        if ('error' in result) {
            console.log(result.error)
            return ApiResponse.error(res, sendMessageByEnv(result.error), [], 500)
        }

        return ApiResponse.success(res, successMsg, result, successCode);
    }
}
