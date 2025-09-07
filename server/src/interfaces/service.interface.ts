import type { CreateMessageRequest, ValidationError, MessageEntity } from '../types/message.types.js';

export interface IValidator {
    validate(data: unknown): ValidationError[];
}

export interface IMessageService {
    processMessage(data: CreateMessageRequest): Promise<MessageEntity>;
}