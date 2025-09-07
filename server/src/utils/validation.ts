import type { ValidationError } from '../types/message.types.js';
import type { IValidator } from '../interfaces/service.interface.js';
import { ValidationService } from '../services/validation.service.js';

export class MessageValidator implements IValidator {
    validate(data: unknown): ValidationError[] {
        return ValidationService.validateMessageData(data);
    }
}
