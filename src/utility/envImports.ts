import type { EnvVariables } from "../types";

export function EnvImport(type: EnvVariables) {
    switch (type) {
        case "ACCESSTOKEN":
            return import.meta.env.VITE_APP_BEARER_TOKEN
        case "ACCOUNT_ID":
            return import.meta.env.VITE_APP_ACCOUNT_ID
        case "API_TOKEN":
            return import.meta.env.VITE_APP_API_TOKEN
        default:
            throw new Error("Env variable is not registerd");;
    }
}