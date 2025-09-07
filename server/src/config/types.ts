export interface ServerConfig {
    port: number;
    nodeEnv: string;
    apiBaseUrl: string;
    isDevelopment: boolean;
    databaseUrl: string;
}

export interface ValidationConfig {
    nameMinLength: number;
    messageMinLength: number;
}

export interface PhonePatternsConfig {
    belarus: RegExp;
}

export interface ErrorMessagesConfig {
    invalidRequest: string;
    nameRequired: string;
    phoneRequired: string;
    phoneInvalid: string;
    messageRequired: string;
    routeNotFound: string;
    internalError: string;
}

export interface HttpStatusConfig {
    ok: number;
    created: number;
    badRequest: number;
    notFound: number;
    internalServerError: number;
}