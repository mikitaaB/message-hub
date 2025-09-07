import type {
    ValidationConfig,
    PhonePatternsConfig,
    ErrorMessagesConfig,
    HttpStatusConfig
} from '../config/types.js';

export const HTTP_STATUS: HttpStatusConfig = {
    ok: 200,
    created: 201,
    badRequest: 400,
    notFound: 404,
    internalServerError: 500
};

export const VALIDATION_LIMITS: ValidationConfig = {
    nameMinLength: 2,
    messageMinLength: 2
};

export const PHONE_PATTERNS: PhonePatternsConfig = {
    belarus: /^(\+375(25|29|33|44)\d{7}|80(25|29|33|44)\d{7})$/
};

export const ERROR_MESSAGES: ErrorMessagesConfig = {
    invalidRequest: 'Invalid request format',
    nameRequired: `Name must be at least ${VALIDATION_LIMITS.nameMinLength} characters`,
    phoneRequired: 'Phone number is required',
    phoneInvalid: 'Invalid Belarusian phone format',
    messageRequired: `Message must be at least ${VALIDATION_LIMITS.messageMinLength} characters`,
    routeNotFound: 'Route not found',
    internalError: 'Internal server error'
};