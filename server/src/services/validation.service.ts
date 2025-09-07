import type { ValidationError } from '../types/message.types.js';
import { PHONE_PATTERNS, VALIDATION_LIMITS, ERROR_MESSAGES } from '../constants/index.js';

export class ValidationService {
    static validateMessageData(data: unknown): ValidationError[] {
        const errors: ValidationError[] = [];

        if (!this.isValidObject(data)) {
            return [{ field: 'request', message: ERROR_MESSAGES.invalidRequest }];
        }

        const request = data as Record<string, unknown>;

        this.validateName(request['name'], errors);
        this.validatePhone(request['phone'], errors);
        this.validateMessage(request['message'], errors);

        return errors;
    }

    private static isValidObject(data: unknown): boolean {
        return data !== null && typeof data === 'object';
    }

    private static validateName(name: unknown, errors: ValidationError[]): void {
        if (!this.isValidString(name, VALIDATION_LIMITS.nameMinLength)) {
            errors.push({ field: 'name', message: ERROR_MESSAGES.nameRequired });
        }
    }

    private static validatePhone(phone: unknown, errors: ValidationError[]): void {
        if (typeof phone !== 'string') {
            errors.push({ field: 'phone', message: ERROR_MESSAGES.phoneRequired });
            return;
        }

        const cleanPhone = phone.replace(/\s+/g, '');
        if (!this.isValidBelarusianPhone(cleanPhone)) {
            errors.push({ field: 'phone', message: ERROR_MESSAGES.phoneInvalid });
        }
    }

    private static validateMessage(message: unknown, errors: ValidationError[]): void {
        if (!this.isValidString(message, VALIDATION_LIMITS.messageMinLength)) {
            errors.push({ field: 'message', message: ERROR_MESSAGES.messageRequired });
        }
    }

    private static isValidString(value: unknown, minLength: number): boolean {
        return typeof value === 'string' && value.trim().length >= minLength;
    }

    private static isValidBelarusianPhone(phone: string): boolean {
        return PHONE_PATTERNS.belarus.test(phone.replace(/\s/g, ''));
    }
}